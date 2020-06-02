import React from 'react';
import './styles.css';

import Profile from '../../img/profile.jpg';
import GitHub from '../../img/GitHub.png';
import Linkedin from '../../img/Linkedin.png';
import Facebook from '../../img/Facebook.png';
import Twitter from '../../img/Twitter.png';
import Instagram from '../../img/Instagram.png';

import AvatarProfile from '../../objects/AvatarProfile';
import IconSocial from '../../objects/IconSocial';


const ProfileUser = () => {
  return(
    <dl className='profile-user'>
      <dd className='avatar'>
      <AvatarProfile src={Profile} alt='avatar do Jônatas'/>
      </dd>
      <dt className='title'>Jônatas J. B. Alexandrão</dt>
      <dd className='description'>
        Estudando e procurando. De operador de máquinas à aspirante a contador, que agora estuda para ser programador e espera um dia achar o que procura.
        {/* Formado em técnico de contabilidade e técnico em informática.
        Aprendi a editar imagens e estampar produtos, aprendi a ser sapateiro para ajudar meu pai em seu ofício e continuo aprendendo para quem sabe um dia achar o que procuro. */}
      </dd>
      <dd className='socials'>
        <IconSocial action='http://github.com/JonatasAlexandrao' src={GitHub} alt='Logo da GitHub' />
        <IconSocial action='http://github.com/JonatasAlexandrao' src={Linkedin} alt='Logo da Linkedin' />
        <IconSocial action='http://github.com/JonatasAlexandrao'src={Facebook} alt='Logo da Facebook' />
        <IconSocial action='http://github.com/JonatasAlexandrao' src={Twitter} alt='Logo da Twitter' />
        <IconSocial action='http://github.com/JonatasAlexandrao' src={Instagram} alt='Logo da Instagram' />

      </dd>
    </dl>
  );
}

export default ProfileUser;