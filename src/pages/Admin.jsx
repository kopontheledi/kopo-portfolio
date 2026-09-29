import { useEffect, useState } from "react";

export default function Admin() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [projects, setProjects] = useState([]);

  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    tech: "",
    liveUrl: "",
    githubUrl: "",
  });

  const load = async () => {
    if (!db) return;

    const snapshot = await getDocs(collection(db, "projects"));

    setProjects(
      snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }))
    );
  };

  useEffect(() => {
    if (!auth) return;

    return onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        load();
      }
    });
  }, []);

  if (!firebaseConfigured) {
    return (
      <div className="admin-shell">
        <h1>Firebase setup required</h1>

        <p>
          Copy <code>.env.example</code> to <code>.env</code> and add your
          Firebase web-app credentials.
        </p>

        <a href="/">← Portfolio</a>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="admin-shell">
        <h1>Portfolio Admin</h1>

        <form
          onSubmit={async (event) => {
            event.preventDefault();

            await signInWithEmailAndPassword(
              auth,
              email,
              password
            );
          }}
        >
          <input
            placeholder="Admin email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button className="btn primary">
            Sign in
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-shell">
      <div className="admin-head">
        <div>
          <p className="kicker">ADMIN</p>
          <h1>Manage projects</h1>
        </div>

        <button
          className="btn"
          onClick={() => signOut(auth)}
        >
          Sign out
        </button>
      </div>

      <form
        className="admin-form"
        onSubmit={async (event) => {
          event.preventDefault();

          await addDoc(collection(db, "projects"), {
            ...form,
            tech: form.tech
              .split(",")
              .map((item) => item.trim())
              .filter(Boolean),
            createdAt: serverTimestamp(),
          });

          setForm({
            title: "",
            category: "",
            description: "",
            tech: "",
            liveUrl: "",
            githubUrl: "",
          });

          load();
        }}
      >
        {Object.keys(form).map((key) => (
          <input
            key={key}
            placeholder={
              key === "tech"
                ? "Tech (comma separated)"
                : key
            }
            value={form[key]}
            onChange={(event) =>
              setForm({
                ...form,
                [key]: event.target.value,
              })
            }
          />
        ))}

        <button className="btn primary">
          Add project
        </button>
      </form>

      <div className="admin-list">
        {projects.map((project) => (
          <article key={project.id}>
            <div>
              <strong>{project.title}</strong>
              <p>{project.category}</p>
            </div>

            <button
              onClick={async () => {
                await deleteDoc(
                  doc(db, "projects", project.id)
                );

                load();
              }}
            >
              Delete
            </button>
          </article>
        ))}
      </div>

      <a href="/">← View portfolio</a>
    </div>
  );
}