import Aws from '../assets/img/tech/Amazon_Web_Services_Logo.svg';
import Azure from '../assets/img/tech/Microsoft_Azure.svg';
import Css from '../assets/img/tech/css3.svg';
import Dotnet from '../assets/img/tech/Microsoft_.NET_logo.svg';
import K8s from '../assets/img/tech/Kubernetes_logo_without_workmark.svg';
import Go from '../assets/img/tech/Go-Logo_Aqua.svg';
import Html from '../assets/img/tech/html5.svg';
import Js from '../assets/img/tech/js.svg';
import Node from '../assets/img/tech/node.png';
import React from '../assets/img/tech/react.svg';

export interface Tech {
  id: string;
  name: string;
  img: string;
}

export const techList: Tech[] = [
  {
    id: 'html',
    name: 'HTML5',
    img: Html,
  },
  {
    id: 'css',
    name: 'CSS3',
    img: Css,
  },
  {
    id: 'js',
    name: 'Javascript',
    img: Js,
  },
  {
    id: 'react',
    name: 'ReactJS',
    img: React,
  },
  {
    id: 'node',
    name: 'NodeJS',
    img: Node,
  },
  {
    id: 'golang',
    name: 'GoLang',
    img: Go,
  },
  {
    id: 'dotnet',
    name: 'C# Dotnet Core',
    img: Dotnet,
  },
  {
    id: 'k8s',
    name: 'Kubernetes',
    img: K8s,
  },
  {
    id: 'azure',
    name: 'Azure',
    img: Azure,
  },
  {
    id: 'aws',
    name: 'AWS',
    img: Aws,
  },
];
