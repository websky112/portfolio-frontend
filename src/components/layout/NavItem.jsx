export const NavItem = ({ active, children }) => {
  return (
    <span
      className={`${
        active ? "font-semibold text-white" : "text-gray-400"
      } text-lg hover:text-white`}
    >
      {children}
    </span>
  );
};
