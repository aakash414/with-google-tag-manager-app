export default function Home() {
  return (
    <div>
      <h1>
        Go to `pages/_app.js` and `pages/_document.js` to see how you can add
        Google Tag Manager to your app
      </h1>
      <form action="#" method="POST">
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          required
        ></input>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          required
        ></input>
        <textarea
          placeholder="Enter message"
          name="message"
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
      <button type="button" id="new button">
        New
      </button>
    </div>
  );
}
