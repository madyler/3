import React from 'react'
import {Link} from 'react-router-dom'
import {Avatar, Button, Col, Layout, Menu, Row} from 'antd'
import {UserOutlined} from '@ant-design/icons'
import {useDispatch, useSelector} from 'react-redux'
import {logoutThunk} from '../redux/auth-reducer'
import {selectIsAuth, selectLogin} from '../redux/auth-selector'


export const Header: React.FC = () => {

    const {Header} = Layout

    const isAuth = useSelector(selectIsAuth)
    const login = useSelector(selectLogin)
    const dispatch = useDispatch()
    const logout = () => dispatch(logoutThunk())

    return <Header className="header">
        <Row>
            <Col span={20}>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1"><Link to={'/developers'}>Developers<br/></Link></Menu.Item>
                </Menu>
            </Col>

            {isAuth
                ? <>
                    <Col span={1}>
                        <Avatar alt={login || ''} style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
                    </Col>
                    <Col span={3}>
                        <Button onClick={logout}>Log out</Button>
                    </Col>
                </>
                : <Col span={4}>
                    <Button>
                        <Link to={'/login'}>Login</Link>
                    </Button>
                </Col>
            }
        </Row>
    </Header>
}