/// <reference types="vite-plugin-svgr/client" />
import type {FunctionComponent} from "react"
import {Outlet, useNavigate} from "react-router";
import styles from "./Layout.module.css"
import {Button, Flex, Space} from "antd";
import {Typography} from 'antd';
import Logo from '../../assets/logo.svg?react'

const {Title, Text} = Typography;

const Layout: FunctionComponent = () => {

  const navigate = useNavigate()

  return (
    <>
      <Flex className={styles.header} justify="space-between" align="center">
        <Space style={{cursor: "pointer"}} onClick={() => navigate("/")}>
          <Logo/>
          <Title level={3} style={{margin: 0}}>Муниципальная больница</Title>
        </Space>
        <Space>
          <Button type="primary" onClick={() => navigate("/make-appointment")}>Записаться на прием</Button>
          <Button type="default" onClick={() => navigate("/profile")}>Личный кабинет</Button>
          <Button type="default">Выйти</Button>
        </Space>
      </Flex>
      <Flex className={styles.content} vertical align="center">
        <Outlet/>
      </Flex>
      <Flex className={styles.footer} justify="space-between" align="center">
        <Text>Информация на сайте носит сугубо рекламно-информационный характер, и ни при каких условиях не является
          публичной офертой, определяемой положениями Статьи 437 (2) Гражданского кодекса Российской Федерации. Точную и
          окончательную информацию о наличии и стоимости указанных услуг вы можете уточнить в контакт-центре.</Text>
        <Text>© 2025 МО «Муниципальная больница», Все права защищены</Text>
      </Flex>
    </>
  )
}

export default Layout