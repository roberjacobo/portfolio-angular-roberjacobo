import { Component } from '@angular/core';

@Component({
	selector: 'app-hobbies',
	templateUrl: './hobbies.component.html',
	styleUrls: ['./hobbies.component.css'],
})
export class HobbiesComponent {
	hobbiesContent: string[] = [
		'I\'m a coffee enthusiast, a devoted follower of its intricate preparations, and a perpetual apprentice in the art of barista. There\'s nothing like the aroma of freshly brewed coffee to awaken my senses and prepare me for the day.',
		'Music is also an essential part of my life. My electric guitar is my companion on musical adventures. Although I set it aside for a while, I\'m excited to rekindle this passion that began in high school. The vibrations of the strings and the chords allow me to express emotions in a unique way.',
		'Movies are also an important part of my life, one of my deepest dreams is that I would like to be a great actor, it is not so crazy that any boy dreams of being the next Chris Evans but that is not a secret.',
		'You\'ll likely find me in front of my Xbox, exploring virtual worlds and taking on epic challenges. Video games are my way to unwind and relieve some stress. While I don\'t always have time to play, every moment I spend on my console is a journey filled with excitement.',
		'One of my biggest goals is to explore the world. I dream of walking on unfamiliar streets, trying exotic dishes, immersing myself in different cultures, and discovering the beauty the world has to offer.',
		'My deepest passion lies in the world of technology and programming. I love bringing simple and creative solutions to everyday problems. For me, programming is a universal language that can breathe life into innovative ideas. I\'m always eager to learn new technologies and push the boundaries of innovation.',
	];
}
