// Images
import tempImg1 from '../Images/HelpStudentsTablet.png';
import tempImg2 from '../Images/TechForumTablet.png';
import tempImg3 from '../Images/VirtualAssistantPC.png';
import tempImg4 from '../Images/AceCodingPC.png';

const MyProjectsData0 = () =>{
    return [
        {
            title: 'My Portfolio',
            url: '/my-projects/my-portfolio',
            webstack : [
                {
                    title: 'FrontEnd',
                    lists : ['React', 'SASS', 'JavaSccript', 'HTML']
                },
                {
                    title: 'BackEnd',
                    lists: ['Node']
                }
            ],
            description : "As you can tell from the name that it's this website. I wanted something to showcase my skills and my projects. So you are looking at the solution of that problem." 
        },
        {
            title: 'Help Students',
            mainImg: tempImg1,
            url: '/my-projects/help-students',
            webstack : [
                {
                    title: 'FrontEnd',
                    lists : ['HTML', 'CSS', 'Bootstrap', 'JavaScript']
                },
                {
                    title: 'BackEnd',
                    lists: ['Flask', 'SqlAlchemy']
                }
            ],
            description : "This project was for a Hackathon in November 2020. The topic was to make something that can help Students in any way; so I made this FullStack Web App where Students can upload their study related problems without revealing their identity." 
        },
        {
            title: 'Tech Forum',
            mainImg: tempImg2,
            url: '/my-projects/tech-forum',
            webstack : [
                {
                    title: 'FrontEnd',
                    lists : ['HTML', 'CSS', 'Bootstrap', 'JavaScript']
                },
                {
                    title: 'BackEnd',
                    lists: ['Flask', 'SqlAlchemy']
                }
            ],
            description: 'Back in 2019 I was attending online Bootcamp and we had to make something similar to blog so I end up making a Tech Forum. Where user can Login, Register, Create, Update and Delete their posts.'
        },
        {
            title: 'Virtual Assistant',
            mainImg: tempImg3,
            url: '/my-projects/virtual-assistant',
            webstack : [
                {
                    title: 'Packages',
                    lists : ['Google Search', 'Wikipedia', 'pyttsx3', 'speech_recognition','webbrowser']
                }
            ],
            description: "So it's an Automation project inspired from many Youtubers. This project has only 1 Python script. It runs totally on Voice Commands and can do bunch of things like taking notes, playing music, search web etc "
        },
        {
            title: 'AceCoding.io',
            mainImg: tempImg4,
            url: '/my-projects/ace-coding-io',
            webstack : [
                {
                    title: 'FrontEnd',
                    lists : ['HTML', 'CSS']
                }
            ],
            description: "Nothing crazy here. Cloned on of my favourite website (AlgoExpert.io) back in 2019. Just used HTML & CSS"
        }
    ]
}

export default MyProjectsData0;