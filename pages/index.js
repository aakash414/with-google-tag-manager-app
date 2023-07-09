export default function Home() {
  return (
    <div>
      <h1>
        Go to `pages/_app.js` and `pages/_document.js` to see how you can add
        Google Tag Manager to your app
      </h1>
      <form name="first" action="#firstform" method="POST">
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
      <a href="www.google.com" target="blank">
        <button type="submit" id="new button">
          New
        </button>
      </a>
      <form name="second" action="#html" method="POST">
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
    </div>
  );
}
