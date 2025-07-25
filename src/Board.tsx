import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Board = ({ board, onPress }) => {
  return (
    <View
      style={styles.board}
    >
      {board.map((row, rowIndex) =>
      (
        <View
          key={rowIndex}
          style={styles.row}
        >
          {
            row.map((cell, cellIndex) => (
              <TouchableOpacity
                key={cellIndex}
                style={styles.cell}
                onPress={() => {
                  onPress(rowIndex, cellIndex);
                }}

              >
                <Text
                  style={styles.cellText}
                >
                  {cell}
                </Text>

              </TouchableOpacity>
            ))
          }
        </View>
      )
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  board: {
    marginTop: 20,
  },
  row:{
    flexDirection: 'row',

  },
  cell: {
    backgroundColor:"#000",
    width:100,
    height:100,
    borderWidth:1,
    borderColor:'white',
    justifyContent:'center',
    alignItems:'center',

  },
  cellText: {
    color:'white',

    fontSize:36,
    textShadowRadius:10,
    textShadowColor:'white',
    textShadowOffset:{
      width:2,
      height:2,
    },

  },
})
export default Board;