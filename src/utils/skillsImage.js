import bootstrap from '../assets/svg/skills/bootstrap.svg'
import css from '../assets/svg/skills/css.svg'
import git from '../assets/svg/skills/git.svg'
import html from '../assets/svg/skills/html.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import materialui from '../assets/svg/skills/materialui.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import nextJS from '../assets/svg/skills/nextJS.svg'
import react from '../assets/svg/skills/react.svg'
import tailwind from '../assets/svg/skills/tailwind.svg'
import typescript from '../assets/svg/skills/typescript.svg'
import figma from '../assets/svg/skills/figma.svg'
import canva from '../assets/svg/skills/canva.svg'
import nestjs from '../assets/svg/skills/nestjs-svgrepo-com.svg'
import nodejs from '../assets/svg/skills/node-js-svgrepo-com.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
        case 'react':
            return react;
        case 'typescript':
            return typescript;
        case 'bootstrap':
            return bootstrap;
        case 'mongodb':
            return mongoDB;
        case 'tailwind':
            return tailwind;
        case 'git':
            return git;
        case 'materialui':
            return materialui;
        case 'figma':
            return figma;
        case 'nestjs':
            return nestjs
        case 'nodejs':
            return nodejs
        default:
            break;
    }
}
