import React from "react";

export default function EventsExample() {
  var val = "";
  const anyFunction = (e) => {
    val = e.target.value;
  };

  //   addEventListener("click", () => {
  //     console.log("outer function");
  //   });
  const onSubmitForm = (e) => {
    e.preventDefault();
    // alert("Value: " + val);
    // console.log(URL[0]);
  };

  return (
    <section className="">
      <h1>Form Section</h1>
      <button className="abc">Click Me!</button>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          id="inputFld"
          name="products"
          onChange={(e) =>
            (document.getElementById("abc").innerHTML = e.target.value)
          }
          style={{ margin: "1rem" }}
        />
        <input
          type="text"
          id="inputFldTwo"
          name="prductsTwo"
          onChange={anyFunction}
          style={{ margin: "1rem" }}
        />
        <div id="abc"></div>
        <input type="submit" />
      </form>
    </section>
  );
}
