import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';

  currentPage = 0;
  images = [
	
	{
		title: 'at the beach',
		url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
	},
	{
		title: 'at the moon',
		url: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9vbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
	},
	{
		title: 'looking at the sun',
		url: 'https://plus.unsplash.com/premium_photo-1675348351176-4baff35c2cc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	},
	{
		title: 'looking atthe snowy mountain',
		url: 'https://images.unsplash.com/photo-1503079789711-148472409b63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
	},
	{
		title: 'at the beach',
		url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
	},
	{
		title: 'at the moon',
		url: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9vbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
	},
	{
		title: 'looking at the sun',
		url: 'https://plus.unsplash.com/premium_photo-1675348351176-4baff35c2cc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	},
	{
		title: 'looking atthe snowy mountain',
		url: 'https://images.unsplash.com/photo-1503079789711-148472409b63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
	},
	{
		title: 'looking atthe snowy mountain',
		url: 'https://images.unsplash.com/photo-1503079789711-148472409b63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
	},
	{
		title: 'at the beach',
		url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
	},
	{
		title: 'at the moon',
		url: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9vbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
	},
	{
		title: 'looking at the sun',
		url: 'https://plus.unsplash.com/premium_photo-1675348351176-4baff35c2cc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	},
	{
		title: 'looking atthe snowy mountain',
		url: 'https://images.unsplash.com/photo-1503079789711-148472409b63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
	}
  ]

  checkWindowIndex(index: number) {
	return Math.abs(this.currentPage - index) < 3
   }
}
