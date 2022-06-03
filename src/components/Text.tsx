import React from "react";

type Rainbow = "red" | "orange" | "yellow" | "green" | "blue" | "indigo" | "violet"

type Props<C extends React.ElementType> = React.PropsWithChildren<TextProps<C>> & React.ComponentPropsWithoutRef<C>
type TextProps<C extends React.ElementType> = {
 as?: C;
 color?: Rainbow | "black";
}

const Text = <C extends React.ElementType = "span">({ as, children, color, ...rest }: Props<C>) => {
 const Component = as || "span";
 const style = color ? {color: color} : {}
 return <Component {...rest} style={style}>{children}</Component>;
};

export default Text;
