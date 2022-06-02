import React from "react";

const Text = ({ as, children, ...rest }) => {
 const Component = as || "span";
 return <Component {...rest}>{children}</Component>;
};

export default Text;
