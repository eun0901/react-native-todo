import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
/* import { useWindowDimensions } from 'react-native'; 위와 동일 */
import PropTypes from 'prop-types';

const StyledInput = styled.TextInput.attrs(({ theme }) => ({
    placeholderTextColor: theme.main,
}))`
width: ${({ width }) => width - 40}px;
height: 60px;
margin: 3px 0;
padding: 15px 20px;
border-radius: 10px;
background-color: ${({ theme }) => theme.itemBackground};
font-size: 25px;
color: ${({ theme }) => theme.text};
`;

const Input = ({ placeholder, value, onChangeText, onSubmitEditing, onBlur }) => {
    const width = Dimensions.get('window').width;
    /* const width = useWindowDimensions().width; 위와 동일*/

    return (
    <StyledInput
    width={width} 
    placeholder={placeholder} 
    maxLength={50} 
    autoCapitalize="none"  //자동 대문자 전환
    autoCorrect={false}    //오타 자동 수정
    returnKeyType="done"   //키보드 완료 버튼
    value={value}
    onChangeText={onChangeText}
    onSubmitEditing={onSubmitEditing}
    onBlur={onBlur}
    />
    );
};

Input.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    onSubmitEditing: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired
};

export default Input;
