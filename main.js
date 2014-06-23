function startDistasterRelief(){
	var victims = [];
	var volunteers = [];
	var allVictimData = '';
	var allVolunteerData = '';
	var moreVictims = confirm('Add a victim to the database?');;

	function addVictim(){
		var newVictim = {
			name : prompt('Victim\'s Name:'),
			phoneNumber : prompt('Victim\'s Phone Number:'),
			street : prompt('Victim\'s Street:')
		}

		victims.push(newVictim);
	}

	function addVolunteer(){
		var newVolunteer = {
			name : prompt('Volunteer\'s Name:'),
			phoneNumber : prompt('Volunteer\'s Phone Number:'),
			street : prompt('Volunteer\'s Street:')
		}

		volunteers.push(newVolunteer);
	}

	function formatData(victimData, volunteerData){
		for (var i = 0; i < victimData.length; i++){
			allVictimData += '---- VICTIM DATA ----';
			for (var key in victimData[i]){
				allVictimData += ' \n '+ key + ': ' + victimData[i][key];
			}
			allVictimData += '\n ---- VICTIM DATA END ----';
		}
		for (var i = 0; i < volunteerData.length; i++){
			allVolunteerData += '---- VOLUNTEER DATA ----';
			for (var key in volunteerData[i]){
				allVolunteerData += ' \n '+ key + ': ' + volunteerData[i][key];
			}
			allVolunteerData += '\n ---- VOLUNTEER DATA END ----';
		}
	}

	while(moreVictims === true){
		addVictim();
		moreVictims = confirm('Add a victim to the database?');
	}

	var moreVolunteers = confirm('Add a volunteer to the database?');

	while(moreVolunteers === true){
		addVolunteer();
		moreVolunteers = confirm('Add a volunteer to the database?');
	}

	formatData(victims, volunteers);

	alert( allVictimData + '\n' + allVolunteerData);

}

startDistasterRelief();

