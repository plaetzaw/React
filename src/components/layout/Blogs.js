import React from "react";

const Blogs = props => {
  return (
    <>
      Welcome to my terribad blog
      <br />
      {props.location.pathname}
      <br />
      {props.match.params.blogID}
    </>
  );
};

export default Blogs;
