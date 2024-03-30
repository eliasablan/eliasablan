import React from 'react'

interface Props {
  title: string
  subtitle: string
}

const MyCustomLayout = ({ title, subtitle }: Props) => {
  return (
    <div
      style={{
        position: 'relative',
        background: 'white',
        display: 'flex',
        alignItems: 'center',
        color: 'black',
        width: '100%',
        height: '100%',
        // border: '5px solid red',
        fontFamily: 'monospace',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '0',
          // margin: '20px',
          padding: '40px',
          fontWeight: '500',
        }}
      >
        <h1
          style={{
            paddingBottom: '20px',
            width: '1120px',
            fontSize: '64px',
            display: 'inline-block',
            margin: '0',
            borderBottom: '5px solid red',
            lineHeight: '1.05',
            letterSpacing: '1px',
          }}
        >
          {title || 'Blog de Elias!'}
        </h1>
        <p
          style={{
            paddingTop: '20px',
            width: '1150px',
            fontSize: '32px',
            fontWeight: '400',
            letterSpacing: '2px',
            margin: '0',
          }}
        >
          @eliasablan
        </p>
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          margin: '20px',
        }}
      >
        <p
          style={{
            fontSize: '32px',
            lineHeight: '1.4',
            maxWidth: '700',
            margin: '20px',
          }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  )
}

export default MyCustomLayout

// const Component = ({ title, subtitle }: Props) => {
//   return (
//     <div
//       style={{
//         position: 'relative',
//         background: 'white',
//         display: 'flex',
//         alignItems: 'center',
//         color: 'black',
//         width: '100%',
//         height: '100%',
//         // border: '5px solid red',
//         fontFamily: 'monospace',
//       }}
//     >
//       <div
//         style={{
//           position: 'absolute',
//           top: '0',
//           // margin: '20px',
//           padding: '40px',
//           fontWeight: '500',
//         }}
//       >
//         <h1
//           style={{
//             paddingBottom: '20px',
//             width: '1120px',
//             fontSize: '64px',
//             display: 'inline-block',
//             margin: '0',
//             borderBottom: '5px solid red',
//             lineHeight: '1.05',
//             letterSpacing: '1px',
//           }}
//         >
//           {title || 'Blog de Elias!'}
//         </h1>
//         <p
//           style={{
//             paddingTop: '20px',
//             width: '1150px',
//             fontSize: '32px',
//             fontWeight: '400',
//             letterSpacing: '2px',
//             margin: '0',
//           }}
//         >
//           @eliasablan
//         </p>
//       </div>
//       <div
//         style={{
//           position: 'absolute',
//           bottom: '0',
//           margin: '20px',
//         }}
//       >
//         <p
//           style={{
//             fontSize: '32px',
//             lineHeight: '1.4',
//             maxWidth: '700',
//             margin: '20px',
//           }}
//         >
//           {subtitle}
//         </p>
//       </div>
//     </div>
//   )
// }

// const OGImageEditor = {
//   name: 'ogImage1200',
//   component: Component,
//   prepare: (document: { title: string; subtitle: string }) => ({
//     title: document.title,
//     subtitle: document.subtitle,
//   }),
//   fields: [
//     {
//       name: 'title',
//       type: 'string',
//       title: 'Title',
//     },
//     {
//       name: 'subtitle',
//       type: 'string',
//       title: 'Subtitle',
//     },
//   ],
//   dimensions: {
//     width: 1200,
//     height: 630,
//   },
// }

// export default OGImageEditor
