import Nav from "@/components/organisms/Nav"
function StoreLayout({ children }) {
  return (
    <>
      <body>
        { <Nav/> }
        {children}
      </body>
    </>
  );
}

export default StoreLayout;