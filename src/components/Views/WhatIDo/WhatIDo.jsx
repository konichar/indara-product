import React from "react";
import "./WhatIDo.scss";

export default function WhatIDo() {
  return (
    <div className="what_container">
      <div className="what_container-inner">
        <div className="what_content_right">
          <p>Beautiful & Consistant UI powered with React</p>
        </div>
        <div className="what_content_left">
          <h2>Beautiful & consistant UI powered with React.</h2>
          <div className="what_content">
            <div className="what_item">
              <div>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRkZGIi8+CiAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMjguOTY5MjE2LDUuNjkzNjUyNDYgQzMxLjQ4MDMxMTMsOC41ODg2MzgwNSAzMywxMi4zNjY4NDc5IDMzLDE2LjUgQzMzLDI1LjYxMjY5ODQgMjUuNjEyNjk4NCwzMyAxNi41LDMzIEM3LjM4NzMwMTYzLDMzIDAsMjUuNjEyNjk4NCAwLDE2LjUgQzAsNy4zODczMDE2MyA3LjM4NzMwMTYzLDAgMTYuNSwwIEMxOS44MTc4NDU0LDAgMjIuOTA2OTY5MiwwLjk3OTI3MzgxNCAyNS40OTQxMDI2LDIuNjY0NTUyNjUgQzI1Ljc5MzY1MTQsMi41NDMwODgyNSAyNi4xMjExNTYxLDIuNDc2MTkwNDggMjYuNDY0Mjg1NywyLjQ3NjE5MDQ4IEMyNy44OTEwMjEzLDIuNDc2MTkwNDggMjkuMDQ3NjE5LDMuNjMyNzg4MjEgMjkuMDQ3NjE5LDUuMDU5NTIzODEgQzI5LjA0NzYxOSw1LjI3ODMxODU5IDI5LjAyMDQxOSw1LjQ5MDc2MDQ3IDI4Ljk2OTIxNiw1LjY5MzY1MjQ2IFogTTI0LjA1NjI5NjYsNC4xMjIwODg3OSBDMjEuODU1ODA3NSwyLjc3NTg5MTU2IDE5LjI2ODUxMzQsMiAxNi41LDIgQzguNDkxODcxMTMsMiAyLDguNDkxODcxMTMgMiwxNi41IEMyLDI0LjUwODEyODkgOC40OTE4NzExMywzMSAxNi41LDMxIEMyNC41MDgxMjg5LDMxIDMxLDI0LjUwODEyODkgMzEsMTYuNSBDMzEsMTMuMDE1MDU3MiAyOS43NzA1ODMzLDkuODE3MjU5OTYgMjcuNzIxODAzNCw3LjMxNjY2MTg1IEMyNy4zNDk2NDYzLDcuNTI0NDQ1ODYgMjYuOTIwNzk0Miw3LjY0Mjg1NzE0IDI2LjQ2NDI4NTcsNy42NDI4NTcxNCBDMjUuMDM3NTUwMSw3LjY0Mjg1NzE0IDIzLjg4MDk1MjQsNi40ODYyNTk0MSAyMy44ODA5NTI0LDUuMDU5NTIzODEgQzIzLjg4MDk1MjQsNC43Mjg4NTY0MiAyMy45NDMwNzkxLDQuNDEyNjk5NDkgMjQuMDU2Mjk2Niw0LjEyMjA4ODc5IFogTTE2Ljg2OTA0NzYsMjQuNjE5MDQ3NiBDMTIuNTg4ODQwOCwyNC42MTkwNDc2IDkuMTE5MDQ3NjIsMjEuMTQ5MjU0NCA5LjExOTA0NzYyLDE2Ljg2OTA0NzYgQzkuMTE5MDQ3NjIsMTIuNTg4ODQwOCAxMi41ODg4NDA4LDkuMTE5MDQ3NjIgMTYuODY5MDQ3Niw5LjExOTA0NzYyIEMyMS4xNDkyNTQ0LDkuMTE5MDQ3NjIgMjQuNjE5MDQ3NiwxMi41ODg4NDA4IDI0LjYxOTA0NzYsMTYuODY5MDQ3NiBDMjQuNjE5MDQ3NiwyMS4xNDkyNTQ0IDIxLjE0OTI1NDQsMjQuNjE5MDQ3NiAxNi44NjkwNDc2LDI0LjYxOTA0NzYgWiBNMTUuODc4MDQ4OCwxNS44NzgwNDg4IEwxMy42MDg2MzEsMTUuODc4MDQ4OCBMMTMuNjA4NjMxLDE3Ljg3ODA0ODggTDE1Ljg3ODA0ODgsMTcuODc4MDQ4OCBMMTUuODc4MDQ4OCwyMC4xMjk0NjQzIEwxNy44NzgwNDg4LDIwLjEyOTQ2NDMgTDE3Ljg3ODA0ODgsMTcuODc4MDQ4OCBMMjAuMTI5NDY0MywxNy44NzgwNDg4IEwyMC4xMjk0NjQzLDE1Ljg3ODA0ODggTDE3Ljg3ODA0ODgsMTUuODc4MDQ4OCBMMTcuODc4MDQ4OCwxMy42MDg2MzEgTDE1Ljg3ODA0ODgsMTMuNjA4NjMxIEwxNS44NzgwNDg4LDE1Ljg3ODA0ODggWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMyAzKSIvPgogIDwvZz4KPC9zdmc+Cg=="
                  className="fy ge qf "
                />
                <h3 className="fy an b0 g4 g5  ">Atomic</h3>
                <p className="fc an d4 b3 b4  dt">
                  Based on Atomic Design Methodology.
                </p>
              </div>
            </div>

            <div className="what_item">
              <div>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRkZGIi8+CiAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMjguOTY5MjE2LDUuNjkzNjUyNDYgQzMxLjQ4MDMxMTMsOC41ODg2MzgwNSAzMywxMi4zNjY4NDc5IDMzLDE2LjUgQzMzLDI1LjYxMjY5ODQgMjUuNjEyNjk4NCwzMyAxNi41LDMzIEM3LjM4NzMwMTYzLDMzIDAsMjUuNjEyNjk4NCAwLDE2LjUgQzAsNy4zODczMDE2MyA3LjM4NzMwMTYzLDAgMTYuNSwwIEMxOS44MTc4NDU0LDAgMjIuOTA2OTY5MiwwLjk3OTI3MzgxNCAyNS40OTQxMDI2LDIuNjY0NTUyNjUgQzI1Ljc5MzY1MTQsMi41NDMwODgyNSAyNi4xMjExNTYxLDIuNDc2MTkwNDggMjYuNDY0Mjg1NywyLjQ3NjE5MDQ4IEMyNy44OTEwMjEzLDIuNDc2MTkwNDggMjkuMDQ3NjE5LDMuNjMyNzg4MjEgMjkuMDQ3NjE5LDUuMDU5NTIzODEgQzI5LjA0NzYxOSw1LjI3ODMxODU5IDI5LjAyMDQxOSw1LjQ5MDc2MDQ3IDI4Ljk2OTIxNiw1LjY5MzY1MjQ2IFogTTI0LjA1NjI5NjYsNC4xMjIwODg3OSBDMjEuODU1ODA3NSwyLjc3NTg5MTU2IDE5LjI2ODUxMzQsMiAxNi41LDIgQzguNDkxODcxMTMsMiAyLDguNDkxODcxMTMgMiwxNi41IEMyLDI0LjUwODEyODkgOC40OTE4NzExMywzMSAxNi41LDMxIEMyNC41MDgxMjg5LDMxIDMxLDI0LjUwODEyODkgMzEsMTYuNSBDMzEsMTMuMDE1MDU3MiAyOS43NzA1ODMzLDkuODE3MjU5OTYgMjcuNzIxODAzNCw3LjMxNjY2MTg1IEMyNy4zNDk2NDYzLDcuNTI0NDQ1ODYgMjYuOTIwNzk0Miw3LjY0Mjg1NzE0IDI2LjQ2NDI4NTcsNy42NDI4NTcxNCBDMjUuMDM3NTUwMSw3LjY0Mjg1NzE0IDIzLjg4MDk1MjQsNi40ODYyNTk0MSAyMy44ODA5NTI0LDUuMDU5NTIzODEgQzIzLjg4MDk1MjQsNC43Mjg4NTY0MiAyMy45NDMwNzkxLDQuNDEyNjk5NDkgMjQuMDU2Mjk2Niw0LjEyMjA4ODc5IFogTTE2Ljg2OTA0NzYsMjQuNjE5MDQ3NiBDMTIuNTg4ODQwOCwyNC42MTkwNDc2IDkuMTE5MDQ3NjIsMjEuMTQ5MjU0NCA5LjExOTA0NzYyLDE2Ljg2OTA0NzYgQzkuMTE5MDQ3NjIsMTIuNTg4ODQwOCAxMi41ODg4NDA4LDkuMTE5MDQ3NjIgMTYuODY5MDQ3Niw5LjExOTA0NzYyIEMyMS4xNDkyNTQ0LDkuMTE5MDQ3NjIgMjQuNjE5MDQ3NiwxMi41ODg4NDA4IDI0LjYxOTA0NzYsMTYuODY5MDQ3NiBDMjQuNjE5MDQ3NiwyMS4xNDkyNTQ0IDIxLjE0OTI1NDQsMjQuNjE5MDQ3NiAxNi44NjkwNDc2LDI0LjYxOTA0NzYgWiBNMTUuODc4MDQ4OCwxNS44NzgwNDg4IEwxMy42MDg2MzEsMTUuODc4MDQ4OCBMMTMuNjA4NjMxLDE3Ljg3ODA0ODggTDE1Ljg3ODA0ODgsMTcuODc4MDQ4OCBMMTUuODc4MDQ4OCwyMC4xMjk0NjQzIEwxNy44NzgwNDg4LDIwLjEyOTQ2NDMgTDE3Ljg3ODA0ODgsMTcuODc4MDQ4OCBMMjAuMTI5NDY0MywxNy44NzgwNDg4IEwyMC4xMjk0NjQzLDE1Ljg3ODA0ODggTDE3Ljg3ODA0ODgsMTUuODc4MDQ4OCBMMTcuODc4MDQ4OCwxMy42MDg2MzEgTDE1Ljg3ODA0ODgsMTMuNjA4NjMxIEwxNS44NzgwNDg4LDE1Ljg3ODA0ODggWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMyAzKSIvPgogIDwvZz4KPC9zdmc+Cg=="
                  className="fy ge qf "
                />
                <h3 className="fy an b0 g4 g5  ">Atomic</h3>
                <p className="fc an d4 b3 b4  dt">
                  Based on Atomic Design Methodology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}