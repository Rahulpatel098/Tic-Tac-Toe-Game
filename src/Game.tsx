import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Board from './Board';

const Game = () => {
  const initialBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']

  ];
  const [board, setBoard] = useState(initialBoard);
  const [player, setPlayer] = useState('X')
  const [winner, SetWinner] = useState('');
  useEffect(() => {
    checkWinner();
  }, [board]);
  const handelPress = (rowIndex, cellIndex) => {
    if (board[rowIndex][cellIndex] === '' && !winner) {
      const newBoard = [...board];
      newBoard[rowIndex][cellIndex] = player;
      setBoard(newBoard);
      setPlayer(player === 'X' ? 'O' : 'X');
    }
  }
  const checkWinner = () => {
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] !== '' &&
        board[i][0] === board[i][1] &&
        board[i][0] === board[i][2]
      ) {
        SetWinner(board[i][0]);
      }
    }
    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] !== '' &&
        board[0][i] === board[1][i] &&
        board[0][i] === board[2][i]
      ) {
        SetWinner(board[0][i]);
      }
    }
    if (
      board[0][0] != '' &&
      board[0][0] === board[1][2] &&
      board[0][0] === board[2][2]
    ) {
      SetWinner(board[0][0]);
    } else if (
      board[0][2] !== '' &&
      board[0][2] === board[1][1] &&
      board[0][2] === board[2][0]
    ) {
      SetWinner(board[0][2]);

    }

  }
  const resetBoard=()=>{
    setBoard(initialBoard);
    setPlayer('X');
    SetWinner('');
  };
  useEffect(()=>{
    if(winner){
      Alert.alert(`Player ${winner} won!!`,'',[{text: 'ok',onPress:resetBoard}])
    }
  },[winner]);
  useEffect(()=>{
    if(!winner){
      const isBoardFull=board.every((row)=>row.every((cell)=>cell!==''));
      if(isBoardFull){
        Alert.alert('It\'s a tie!!!','',[{text: 'ok',onPress:resetBoard}])
      }
    }
  },[board])
  return (
    <View 
     style={styles.container}
    >
      <Text style={styles.title}>Tic tac toe</Text>
      <Board board={board} onPress={handelPress}/>
      {/* <Board board={board} onPress={handelPress}/> */}
      <TouchableOpacity>
        <Text>
          Reset the Game;
        </Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title:{
    fontSize:14,
    fontWeight:'bold',
    marginBottom:20,
  }
})

export default Game;