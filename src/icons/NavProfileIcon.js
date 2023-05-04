import * as React from "react";
import { StyleSheet } from "react-native";
import Svg, { G, Path } from "react-native-svg"

export const NavProfileIcon = (props) => {
  return (
    <Svg
      style={styles.icon}
      width={45}
      height={42}
      viewBox="0 0 45 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G opacity={props.isActive ? "1" : "0.25"} fill="#fff">
        <Path d="M22.5 12.551c1.424 0 2.74-.4 3.792-1.078a2.144 2.144 0 012.593.214A9.433 9.433 0 0132 18.71v1.147A2.15 2.15 0 0129.843 22H15.157A2.15 2.15 0 0113 19.856v-1.147a9.405 9.405 0 013.11-7.017 2.144 2.144 0 012.593-.215c1.058.675 2.369 1.074 3.797 1.074zM22.5 10.64c2.95 0 5.341-2.383 5.341-5.32 0-2.938-2.391-5.32-5.34-5.32-2.95 0-5.342 2.382-5.342 5.32 0 2.937 2.391 5.32 5.341 5.32z" />
      </G>
      <Path
        opacity={props.isActive ? "1" : "0.25"}
        d="M3.935 36.92h-1.46V40h-.98v-7h.98v3.04h1.48l2.2-3.04h1.07l-2.5 3.39L7.345 40h-1.14l-2.27-3.08zm6.234-2.27c.733 0 1.293.18 1.68.54.393.36.59.897.59 1.61V40h-.91v-.7c-.16.247-.39.437-.69.57-.294.127-.644.19-1.05.19-.594 0-1.07-.143-1.43-.43a1.384 1.384 0 01-.53-1.13c0-.467.17-.84.51-1.12.34-.287.88-.43 1.62-.43h1.52v-.19c0-.413-.12-.73-.36-.95-.24-.22-.594-.33-1.06-.33-.314 0-.62.053-.92.16a2.3 2.3 0 00-.76.41l-.4-.72c.273-.22.6-.387.98-.5.38-.12.783-.18 1.21-.18zm-.22 4.67c.366 0 .683-.08.95-.24.266-.167.46-.4.58-.7v-.74h-1.48c-.814 0-1.22.273-1.22.82 0 .267.103.477.31.63.206.153.493.23.86.23zm6.918-4.44c.494 0 .934.11 1.32.33.387.22.687.527.9.92.22.387.33.83.33 1.33 0 .513-.116.97-.35 1.37-.226.393-.55.7-.97.92-.413.22-.886.33-1.42.33-.9 0-1.596-.307-2.09-.92-.486-.62-.73-1.49-.73-2.61 0-1.087.224-1.937.67-2.55.447-.62 1.13-1.03 2.05-1.23l2.42-.54.14.88-2.23.48c-.693.153-1.21.413-1.55.78-.34.367-.533.893-.58 1.58.227-.34.52-.603.88-.79.36-.187.764-.28 1.21-.28zm-.17 4.4c.34 0 .64-.077.9-.23.267-.153.474-.363.62-.63.147-.273.22-.583.22-.93 0-.527-.16-.95-.48-1.27-.32-.32-.74-.48-1.26-.48s-.943.16-1.27.48c-.32.32-.48.743-.48 1.27 0 .347.074.657.22.93.154.267.364.477.63.63.267.153.567.23.9.23zm4.091-4.58h.96v3.86l3.25-3.86h.87V40h-.96v-3.86L21.668 40h-.88v-5.3zm6.944 0h.96v2.25h3.02V34.7h.96V40h-.96v-2.22h-3.02V40h-.96v-5.3zm11.596 2.68c0 .073-.006.17-.02.29h-4.3c.06.467.264.843.61 1.13.354.28.79.42 1.31.42.634 0 1.144-.213 1.53-.64l.53.62c-.24.28-.54.493-.9.64-.353.147-.75.22-1.19.22-.56 0-1.056-.113-1.49-.34a2.528 2.528 0 01-1.01-.97 2.798 2.798 0 01-.35-1.4c0-.513.114-.977.34-1.39.234-.413.55-.733.95-.96.407-.233.864-.35 1.37-.35.507 0 .957.117 1.35.35.4.227.71.547.93.96.227.413.34.887.34 1.42zm-2.62-1.92c-.46 0-.846.14-1.16.42-.306.28-.486.647-.54 1.1h3.4a1.674 1.674 0 00-.55-1.09c-.306-.287-.69-.43-1.15-.43zm7.835.08h-1.94V40h-.96v-4.46h-1.94v-.84h4.84v.84z"
        fill="#fff"
      />
    </Svg>
  )
}

const styles = StyleSheet.create({
  icon: {
    marginBottom: 8,
  }
})