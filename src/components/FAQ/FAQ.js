import React from "react";
const FAQ = () => {
  return (
    <div class="container mt-3">
      <div class="row g-2">
        <div class="col-md-6 col-12">
          <div class="p-3 border bg-light blog">
            <h5>Do I need to rewrite all my class components?</h5>
            <p>
              <span className="fw-semibold">Ans: </span>No. There are no plans
              to remove classes from React — we all need to keep shipping
              products and can't afford rewrites. We recommend trying Hooks in
              new code.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <div class="p-3 border bg-light blog">
            <h5>How much of my React knowledge stays relevant?</h5>
            <p>
              <span className="fw-semibold">Ans: </span>Hooks are a more direct
              way to use the React features you already know — such as state,
              lifecycle, context, and refs. They don’t fundamentally change how
              React works, and your knowledge of components, props, and top-down
              data flow is just as relevant. Hooks do have a learning curve of
              their own. If there’s something missing in this documentation,
              raise an issue and we’ll try to help.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <div class="p-3 border bg-light blog">
            <h5>How to create expensive objects lazily?</h5>
            <p>
              <span className="fw-semibold">Ans: </span>useMemo lets you memoize
              an expensive calculation if the dependencies are the same.
              However, it only serves as a hint, and doesn’t guarantee the
              computation won’t re-run. But sometimes you need to be sure an
              object is only created once.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <div class="p-3 border bg-light blog">
            <h5>How does React associate Hook calls with components?</h5>
            <p>
              <span className="fw-semibold">Ans: </span>React keeps track of the
              currently rendering component. Thanks to the Rules of Hooks, we
              know that Hooks are only called from React components (or custom
              Hooks — which are also only called from React components). There
              is an internal list of “memory cells” associated with each
              component. They’re just JavaScript objects where we can put some
              data. When you call a Hook like useState(), it reads the current
              cell and then moves the pointer to the next one. This is how
              multiple useState() calls each get independent local state.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
