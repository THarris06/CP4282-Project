/**
 * Bubble Component
 * 
 * Renders a circular bubble for the Bubble Popper game.
 * Each bubble has a position (x, y) and size (radius).
 * 
 * CURRENT IMPLEMENTATION:
 * - Simple green circle with drop shadow
 * - Fixed radius (typically 30)
 * - Absolute positioning
 * 
 * ============== STUDENT EXTENSION IDEAS ==============
 * Consider enhancing this component with:
 * 1. Different bubble types/colors
 * 2. Animation effects (pulsing, rotation)
 * 3. Pop animation when hit by laser
 * 4. Special power-up bubbles
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';

/**
 * Bubble component for the Bubble Popper game
 * 
 * @param {Object} props - Component properties
 * @param {number} props.x - X coordinate of the bubble
 * @param {number} props.y - Y coordinate of the bubble
 * @param {number} props.radius - Radius of the bubble
 * @returns {React.Component} Rendered bubble
 */
export default function Bubble({ x, y, radius }) {
  return (
    <View
      style={[
        styles.bubble,
        {
          left: x,
          top: y,
          width: radius * 2,
          height: radius * 2,
          borderRadius: radius,
        },
      ]}
    >
      {/* Inner highlight to simulate shine */}
      <View
        style={[
          styles.highlight,
          {
            width: radius,
            height: radius,
            borderRadius: radius / 2,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    position: 'absolute',
    backgroundColor: 'rgba(173, 216, 230, 0.3)', // light blue with transparency
    borderWidth: 1,
    borderColor: 'rgba(173, 216, 230, 0.6)',
    shadowColor: '#00BFFF',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    position: 'absolute',
    top: 4,
    left: 4,
  },
});
