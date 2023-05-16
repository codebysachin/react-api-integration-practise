import PostList from "./PostList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>API Integration</h1>
      <h3 style={{ textAlign: "left" }}>List of Posts fetched from API</h3>
      <PostList />
    </div>
  );
}
