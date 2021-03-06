import React, { memo, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LOG_IN, LOG_OUT, ADD_USER, REMOVE_USER } from '../actions/user';
import shortid from 'shortid';
import Button from '../components/Button';

const Navbar = memo(() => {
  //console.log('rendering = Navbar');
  const dispatch = useDispatch();
  const { me, users } = useSelector(state => state.user);
  const onLogIn = useCallback(() => {
    dispatch({
      type: LOG_IN,
    });
  }, []);

  const onLogOut = useCallback(() => {
    dispatch({
      type: LOG_OUT,
    });
  }, []);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const onChangeName = useCallback((e) => {
    setName(e.target.value);
  }, []);
  const onChangeAge = useCallback((e) => {
    setAge(e.target.value);
  }, []);
  
  const onAddUser = useCallback(() => {
    dispatch({
      type: ADD_USER,
      data: { name, age, id: shortid.generate() }
    });
    setName('');
    setAge('');
  }, [name, age]);

  const onRemoveUser = useCallback((id) => () => {
    dispatch({
      type: REMOVE_USER,
      data: id
    });
  }, []);
  
  return (
    <>
      <nav>
        <ul>
          {!me ? (
            <>
              <li><Button className="btn-st1" onClick={onLogIn}>LOGIN</Button></li>
              <li>SIGNUP</li>
            </>
          ) : (
            <>
              <li><Button className="btn-st1" onClick={onLogOut}>LOGOUT</Button></li>
              <li>MYPAGE</li>
            </>
          )}
        </ul>
      </nav>
      <h3>회원목록</h3>
      <ul>
        {users.map(user => <li key={user.id}>{user.name} ({user.age}) <Button className="btn-st1" onClick={onRemoveUser(user.id)}>삭제</Button></li>)}
      </ul>
      <div>
        <h3>회원추가</h3>
        <input type="text" placeholder="이름" value={name} onChange={onChangeName} />
        <input type="text" placeholder="나이" value={age} onChange={onChangeAge} />
        <Button className="btn-st1" onClick={onAddUser}>가입</Button>
      </div>
    </>
  )
});

export default Navbar;