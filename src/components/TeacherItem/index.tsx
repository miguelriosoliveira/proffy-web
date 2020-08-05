import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
	return (
		<article className="teacher-item">
			<header>
				<img
					src="https://avatars3.githubusercontent.com/u/12296400?s=460&u=12bb04026b457caad8edb63cc24fa28bf92f6c6e&v=4"
					alt="Miguel Rios"
				/>
				<div>
					<strong>Miguel Rios</strong>
					<span>Matemática</span>
				</div>
			</header>

			<p>
				Enthusiast of the best web & mobile development technologies.
				<br />
				<br />
				Passionate about education and changing people's lives through programming. More than
				200,000 people have already undergone one of my trainings.
				<br />
				<br />
				"Nothing in this world beats good old persistence. Talent does not surpass. Nothing more
				common than talented failures. Genius does not overcome. Unrecognized geniuses is
				practically a cliche. Education does not exceed. The world is full of educated fools.
				Persistence and determination alone are powerful."
			</p>

			<footer>
				<p>
					Preço/hora
					<strong>R$ 80,00</strong>
				</p>
				<button type="button">
					<img src={whatsappIcon} alt="WhatsApp" />
					Entrar em contato
				</button>
			</footer>
		</article>
	);
};

export default TeacherItem;
