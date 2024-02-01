// import { useSelector } from "react-redux";
// import { selectCursor } from "../../redux/appSlice";
// import customCursorDefault from "../../assets/cursors/cursor.svg";
// import customCursorLink from "../../assets/cursors/cursorLink.svg";
// import customCursorHi from "../../assets/cursors/cursorHi.svg";

// import "./styles.css";

// const Cursor = () => {
//   const cursorType = useSelector(selectCursor);
//   console.log("Rendering Cursor component, cursorType:", cursorType);

//   let cursorImage;
//   switch (cursorType) {
//     case "default":
//       cursorImage = customCursorDefault;
//       break;
//     case "link":
//       cursorImage = customCursorLink;
//       break;
//     case "photo":
//       cursorImage = customCursorHi;
//       break;
//     default:
//       cursorImage = customCursorDefault;
//   }

//   const cursorStyle = {
//     cursor: `url(${cursorImage}), auto`,
//   };

//   return <div style={cursorStyle} className="cursorContainer" />;
// };

// export default Cursor;
