import React from "react";

const Blogs = () => {
  return (
    <div class="container">
      <div class="row g-2">
        <div class="col-md-6 col-12">
          <div class="p-3 border bg-light blog">
            <h5>What is Cors</h5>
            <p>
              <span className="fw-semibold">Ans: </span>Cross-Origin Resource
              Sharing (CORS) is an HTTP-header based mechanism that allows a
              server to indicate any origins (domain, scheme, or port) other
              than its own from which a browser should permit loading resources.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <div class="p-3 border bg-light blog">
            <h5>
              Why are you using firebase? What other options do you have to
              implement authentication?
            </h5>
            <p>
              <span className="fw-semibold">Ans: </span>The Firebase Realtime
              Database lets us build rich, collaborative applications by
              allowing secure access to the database directly from client-side
              code. Data is persisted locally, and even while offline, realtime
              events continue to fire, giving the end user a responsive
              experience. Back4App,Backendless,kuzzle,pubnub,Heroku are other
              options to implement authentication.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <div class="p-3 border bg-light blog">
            <h5>How does the private route work?</h5>
            <p>
              <span className="fw-semibold">Ans: </span>The private route
              component is similar to the public route, the only change is that
              redirect URL and authenticate condition. If the user is not
              authenticated he will be redirected to the login page and the user
              can only access the authenticated routes If he is authenticated
              (Logged in).
            </p>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <div class="p-3 border bg-light blog">
            <h5>What is Node? How does Node work?</h5>
            <p>
              <span className="fw-semibold">Ans: </span>A node is a basic unit
              of a data structure, such as a linked list or tree data structure.
              Nodes contain data and also may link to other nodes. Links between
              nodes are often implemented by pointers.It is used as backend
              service where javascript works on the server-side of the
              application. This way javascript is used on both frontend and
              backend. Node. JS runs on chrome v8 engine which converts
              javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
