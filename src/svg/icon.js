import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={23}
      height={30}
      viewBox="0 0 23 30"
      {...props}
    >
      <defs>
        <style>{props.color}</style>
      </defs>
      <g opacity={0.8}>
        <path
          className="b"
          d="M17.195 19.929H5.976a.54.54 0 000 1.064h11.219a.531.531 0 00.173 0 .539.539 0 00-.173-1.064zM17.195 9.021H5.976a.54.54 0 000 1.064h11.219a.531.531 0 00.173 0 .539.539 0 00-.173-1.064zM17.195 17.202H5.976a.54.54 0 000 1.064h11.219a.539.539 0 100-1.064z"
          transform="translate(-39.08) translate(39.08)"
        />
        <path
          className="b"
          d="M16.99.167A.536.536 0 0016.605 0H2.535A2.542 2.542 0 000 2.543v24.914A2.542 2.542 0 002.535 30h17.93A2.542 2.542 0 0023 27.457V6.2zm.152 1.681l4.189 4.2H18.27a1.137 1.137 0 01-1.128-1.131zm4.949 25.61a1.466 1.466 0 01-1.457 1.461h-18.1a1.466 1.466 0 01-1.457-1.461V2.543a1.466 1.466 0 011.457-1.461h13.53V4.9a2.213 2.213 0 002.206 2.213h3.822z"
          transform="translate(-39.08) translate(39.08)"
        />
        <path
          className="b"
          d="M17.196 11.748H5.976a.531.531 0 00-.173 0 .539.539 0 00.173 1.064h11.22a.539.539 0 100-1.064zM17.195 14.475H5.976a.539.539 0 000 1.064h11.219a.53.53 0 00.173 0 .539.539 0 00-.173-1.064z"
          transform="translate(-39.08) translate(39.08)"
        />
      </g>
    </svg>
  )
}

export default SvgComponent;
