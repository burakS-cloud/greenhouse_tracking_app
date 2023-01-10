import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  // {
  //   title: 'About',
  //   path: '/about',
  //   icon: <IoIcons.IoIosPaper />,
  //   cName: 'nav-text'
  // },
  {
    title: 'Weather',
    path: '/weather',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Tohum',
    path: '/tohum',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Balık',
    path: '/balik',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Balık Yemi',
    path: '/balikyemi',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Mamül',
    path: '/mamul',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/login',
    cName: 'nav-text'
  }
];