var Assets = (function(){
    var document = (function () {
        var document = {};

        Object.defineProperty(document, 'init' , {
            value: function (title, language) {
                this.title = title;
                this.language = language;
                this.personalInfo = [];
                this.photo = null;
                this.photoID = 0;
                this.ID = 0;
            }
        });
        
        Object.defineProperty(document, 'addFullName', {
            value: function(firstName, surName, lastName) {
                this.personalInfo.push({
                    firstName: firstName,
                    surname: surName,
                    lastName: lastName
                });
                return this;
            }
        });

        Object.defineProperty(document, 'addPersonalInfo', {
            value: function () {

            }
        });

        Object.defineProperty(document, 'addPhoto', {
            value: function(photoLocation) {
                this.photoID += 1;
                return this;
            }
        });

        Object.defineProperty(document, 'loadDocument', {
            value: function(document) {

            }
        });

        Object.defineProperty(document, 'printDocument', {
            value: function(document) {

            }
        });
        
        return document;
    })();

    var cv = (function (parent) {
        var cv;

        cv = Object.create(parent);

        Object.defineProperty(cv, 'init', {
            value: function (title, language) {
                parent.init.call(this, title, language);
                this.ID += 1;
                return this;
            }
        });

        Object.defineProperty(cv, 'addWorkExperience', {

        });

        Object.defineProperty(cv, 'addPersonalSkills', {

        });

        return cv;

    })(document);

    var motivationalLetter = (function (parent) {
        var motivationalLetter;

        motivationalLetter = Object.create(parent);

        Object.defineProperty(motivationalLetter, 'init', {
            value: function(title, language) {
                parent.init.call(this, title, language);
                this.ID += 1;
                this.textOfLetter = {};
                return this;
            }
        });

        return motivationalLetter;
    })(document);
})();
/*
	assets.personalInformation = [{
	    name: 'First name',
	    id: 'first-name',
	    data: null
	}, {
	    name: 'Last name',
	    id: 'last-name',
	    data: null
	}, {
	    name: 'Gender',
	    id: 'gender',
	    data: null
	}, {
	    name: 'Telephone',
	    id: 'phone',
		src: null,
	    data: null
	}, {
	    name: 'Current city',
	    id: 'current-city',
		src: null,
	    data: null
	}, {
	    name: 'Country',
	    id: 'country',
	    data: null
	}, {
	    name: 'Email',
	    id: 'email',
		src: null,
	    data: null
	}, {
	    name: 'Website / Blog',
	    id: 'blog',
		src: null,
	    data: null
	}, {
	    name: 'Date of birth',
	    id: 'birth',
	    data: null
	}, {
	    name: 'QR code',
	    id: 'qr',
	    data: null
	}, {
	    name: 'Social profile',
	    id: 'social',
	    data: null,
		profiles: {
			facebook: {
				name: 'Facebook profile',
			    id: 'facebook',
			    src: 'images/social/facebook.png',
				srcHover: 'images/social/facebook1.png',
			    data: null,
			},
			google: {
				name: 'Google profile',
			    id: 'google',
			    src: 'images/social/google.png',
				srcHover: 'images/social/google1.png',
			    data: null,
			},
			twitter: {
				name: 'Twitter profile',
			    id: 'twitter',
			    src: 'images/social/twitter.png',
				srcHover: 'images/social/twitter1.png',
			    data: null,
			},
			yahoo: {
				name: 'Yahoo profile',
			    id: 'yahoo',
			    src: 'images/social/yahoo.png',
				srcHover: 'images/social/yahoo1.png',
			    data: null,
			},
			linkedin: {
				name: 'Linkedin profile',
			    id: 'linkedin',
			    src: 'images/social/linkedin.png',
				srcHover: 'images/social/linkedin1.png',
			    data: null,
			},
			skype: {
				name: 'Skype profile',
			    id: 'skype',
			    src: 'images/social/skype.png',
				srcHover: 'images/social/skype1.png',
			    data: null,
			},
			youtube: {
				name: 'Youtube profile',
			    id: 'youtube',
			    src: 'images/social/youtube.png',
				srcHover: 'images/social/youtube1.png',
			    data: null,
			},
			github: {
				name: 'Github profile',
			    id: 'github',
			    src: 'images/social/github.png',
				srcHover: 'images/social/github1.png',
			    data: null,
			},
		}
	}];
	
	assets.lastChange = {
		name: 'Last change',
	    id: 'last-change',
	    data: null,
	};
	
	assets.workExperience = {
		name: 'Work experience',
	    id: 'work-experience',
	    from: null,
		to: null,
		occupation: null,
		employer: {
			name: null,
			country: null,
			city: null,
			website: null
		},
		responsibilities: null,
	    data: null,
	};
	
	assets.education  = {
		name: 'Education and training',
	    id: 'education',
	    from: null,
		to: null,
		profession: null,
		qualification: null,
		organisation: {
			name: null,
			country: null,
			city: null,
			website: null
		},
		skills: null,
	    data: null,
	};
	
	assets.personalSkills  = {
		name: 'Personal Skills',
	    id: 'personal-skills',
	    motherTongue: null,
		otherLanguage: {
			name: null,
			understanding: null,
			speaking: null,
			writing: null,
			certificate: null,
		},
		to: null,
		profession: null,
		qualification: null,
		
		skills: null,
	    data: null,
	};
	
	assets.skills  = {
			personalSkills: {
				name: 'Personal Skills',
			    id: 'personal-skills',
			    motherTongue: null,
				otherLanguage: {
					name: null,
					understanding: null,
					speaking: null,
					writing: null,
					certificate: null,
				},
				to: null,
				profession: null,
				qualification: null,
				
				skills: null,
			    data: null,
			},
			communicationSkills: {
				name: 'Communication skills',
			    id: 'communication-skills',
			    motherTongue: null,
				otherLanguage: {
					name: null,
					understanding: null,
					speaking: null,
					writing: null,
					certificate: null,
			},
			digitalrSkills: {
				name: 'Digital  skills',
			    id: 'digital-skills',
			    data: null,
			},
			otherSkills: {
				name: 'Other skills',
			    id: 'other-skills',
			    data: null,
			}
		}
	};
	
	assets.drivingLicence = {
		name: 'Driving licence',
	    id: 'digital-skills',
		categories: [{
			    name: 'A',
			    id: 'categories-a',
				src: null,
			    data: null
			}, {
			    name: 'B',
			    id: 'categories-b',
				src: null,
			    data: null
			}, {
			    name: 'C',
			    id: 'categories-c',
				src: null,
			    data: null
			}, {
			    name: 'D',
			    id: 'categories-d',
				src: null,
			    data: null
			}, {
			    name: 'E',
			    id: 'categories-e',
				src: null,
			    data: null
			}, {
			    name: 'M',
			    id: 'categories-e',
				src: null,
			    data: null
			},
		],
	};
	
	assets.extraInformation = {
		certifications: {
			name: 'Certifications',
		    id: 'certifications',
			src: null,
		    data: null,
		},
		courses: {
			name: 'Courses',
		    id: 'courses',
			src: null,
		    data: null,
		},
		presentations: {
			name: 'Presentations',
		    id: 'presentations',
			src: null,
		    data: null,
		},
		projects: {
			name: 'Projects',
		    id: 'projects',
			src: null,
		    data: null,
		},
		extraInformation: {
			name: 'Extra Information',
		    id: 'extraInformation',
			src: null,
		    data: null,
		},
	};
	
	return assets;
})();
*/