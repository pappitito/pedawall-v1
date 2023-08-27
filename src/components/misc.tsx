export interface CourseProp {
    id?: string
    title: string;
    subtitle?: string;
    school?: string;
    level?: string;
    type?: string;
    duration?: string;
    rating?: string
    numberOfRatings?: number;
    numberOfStudents?: number;
    language?: string;
    coverImg?: string;
    lastUpdated?: string;
    price?: number;
    about?: string;
    skills?: string[]
    requirements?: string[];
    tutors?: Tutor[]
    content?: WeekContent[];
}
interface Tutor {
    name: string;
    department?:string;
    image?: string;
    info?: string
}

interface WeekContent {
    title: string,
    content?: (VideoLesson | Test)[];
    objectives?: string[];
    isCompleted?: boolean;

}
type VideoLesson = {
    video: string;
    transcription: string;
    isCompleted: boolean;
}
type Test = {
    type: string;
    testInstruction: string;
    questions: Question[];
    passMark: number;
    isCompleted?: boolean;
}
interface Question{
    question: string;
    image?: string;
    options?: string[] | number[];
    isTheory?: boolean;
    isMultipleAnswers?: boolean;
    answer?: string | number ;
    multipleAnswers?: string[] | number[]
    instruction?: string;


}

export const dummyCourses : CourseProp[] = [
    {
        id: 'ijgnig5y4545iu',
        title: 'Deep Water Skating',
        subtitle: 'Manage Your Social Strategies. Expand your online audience and establish your social brand',
        school: "Cobra kai",
        level: 'intermediate',
        type: 'proffessional',
        duration: '5 weeks',
        numberOfRatings: 150,
        numberOfStudents: 602,
        language: 'English',
        rating: '4.8',
        coverImg: '/assets/courseImg.svg',
        lastUpdated: 'Mon, 3rd May 2023',
        price: 57.20,
        about: `This specialization is updated every quarter to ensure you are receiving the most up-to-date training. The
                Social Media Marketing Specialization is designed to achieve two objectives. It gives you the social analytics
                tools, and training to help you become an influencer on social media. The course also gives you the
                knowledge and resources to build a complete social media marketing strategy – from consumer insights to
                final justification metrics.....more`,
        skills: [`proficiency in social media marketing`, `proficiency in influencer marketing and digital marketing`,
                    `proficiency in social networking`, `proficiency in business planning`],
        requirements: ['understanding of High school economics', `basic understanding of social media`, `ability to eat`],
        tutors: [{
            name: 'Prof Adeyemi Taiwo',
            department: 'Electrical and Skating Engineering',
            info: ' is a skilled lecturer whose main research focus is on power and has been a lecturer for over 12years'
        },
        {
            name: 'Aberdeen High tower',
            department: 'Electrical and Skating Engineering',
            info: ' is a skilled lecturer whose main super power is telepathy'
        }],
        content:[{
            title: `Intoduction to skate boards`,
            objectives: ['understanding of High school economics', `basic understanding of social media`, `ability to eat`],

        },
        {
            title: `Navigating the sea`,
            objectives: ['understanding of High school economics', `basic understanding of social media`, `ability to eat`],

        },
        {
            title: `Avoiding Sharks`,
            objectives: ['understanding of High school economics', `basic understanding of social media`, `ability to eat`],

        },
        {
            title: `Being one with the Ocean`,
            objectives: ['understanding of High school economics', `basic understanding of social media`, `ability to eat`],

        },]
        
    },
    {
        id: '35kskjeidei5533',
        title: 'Professional Certificate In Social Media Marketing strategy development',
        subtitle: 'Manage Your Social Strategies. Expand your online audience and establish your social brand',
        school: "Cobra kai",
        level: 'intermediate',
        type: 'proffessional',
        duration: '5 weeks',
        numberOfRatings: 150,
        numberOfStudents: 602,
        language: 'English',
        rating: '4.4',
        coverImg: '/assets/courseImg.svg',
        price: 10.00,
        about: `This specialization is updated every quarter to ensure you are receiving the most up-to-date training. The
                Social Media Marketing Specialization is designed to achieve two objectives. It gives you the social analytics
                tools, and training to help you become an influencer on social media. The course also gives you the
                knowledge and resources to build stamina`,
        skills: [`proficiency in social media marketing`, `proficiency in influencer marketing and digital marketing`,
                    `proficiency in social networking`, `proficiency in business planning`],
        requirements: ['understanding of High school economics', `basic understanding of social media`, `ability to eat`],
        tutors: [{
            name: 'Prof Vanilla Ice',
            department: 'Electrical and Skating Engineering',
            info: ' is a skilled lecturer whose main research focus is on power and has been a lecturer for over 12years'
        }],
        content:[{
            title: `Intoduction to skate boards`,
            objectives: ['understanding of High school economics', `basic understanding of social media`, `ability to eat`],

        },
        {
            title: `Navigating the sea`,
            objectives: ['understanding of High school economics', `basic understanding of social media`, `ability to eat`],

        },
        {
            title: `Avoiding Sharks`,
            objectives: ['understanding of High school economics', `basic understanding of social media`, `ability to eat`],

        },
        {
            title: `Being one with the Ocean`,
            objectives: ['understanding of High school economics', `basic understanding of social media`, `ability to eat`],

        },]
    },
    {
        id: '439drjf9vrj',
        title: 'Introduction to Web development',
        subtitle: 'Manage Your Social Strategies. Expand your online audience and establish your social brand',
        school: "Cobra kai",
        level: 'intermediate',
        type: 'certificate',
        duration: '5 weeks',
        numberOfRatings: 150,
        numberOfStudents: 602,
        language: 'English',
        rating: '4.5',
        coverImg: '/assets/courseImg.svg',
        price: 20.00,
        about: `i am more than a conqueror babayyy!!, this progamming shit don tire me mehn, make jesus just come tomorrow by 4pm
        make everybody just dey alright mehn, cheee. it's lonely at the top`,
        skills: [`proficiency in social media marketing`, `proficiency in influencer marketing and digital marketing`,
                    `proficiency in social networking`, `proficiency in business planning`],
        requirements: ['understanding of High school economics', `basic understanding of social media`, `ability to eat`],
        tutors: [{
            name: 'Prof Adeyemi Taiwo',
            department: 'Electrical and Skating Engineering',
            info: ' is a skilled lecturer whose main research focus is on power and has been a lecturer for over 12years'
        },
        {
            name: 'Aberdeen High tower',
            department: 'Electrical and Skating Engineering',
            info: ' is a skilled lecturer whose main super power is telepathy'
        }],
        content:[{
            title: `Intoduction to skate boards`,
            objectives: ['understanding of High school economics', `basic understanding of social media`, `ability to eat`],

        },
        {
            title: `Navigating the sea`,
            objectives: ['understanding of High school economics', `basic understanding of social media`, `ability to eat`],

        },
        {
            title: `Avoiding Sharks`,
            objectives: ['understanding of High school economics', `basic understanding of social media`, `ability to eat`],

        },
        {
            title: `Being one with the Ocean`,
            objectives: ['understanding of High school economics', `basic understanding of social media`, `ability to eat`],

        },]
    },
    {
        id: 'iui3j9340jt4jr',
        title: 'Artificial intelligence',
        subtitle: 'Manage Your Social Strategies. Expand your online audience and establish your social brand',
        school: "Cobra kai",
        level: 'beginner',
        type: 'proffessional',
        duration: '5 weeks',
        numberOfRatings: 150,
        numberOfStudents: 602,
        language: 'English',
        rating: '4.6',
        coverImg: '/assets/courseImg.svg',
        price: 49.99,
        about: `This specialization is updated every quarter to ensure you are receiving the most up-to-date training. The
                Social Media Marketing Specialization is designed to achieve two objectives. It gives you the social analytics
                tools, and training to help you become an influencer on social media. The course also gives you the
                knowledge and resources to build a complete social media marketing strategy – from consumer insights to
                final justification metrics.....more`,
        skills: [`proficiency in social media marketing`, `proficiency in influencer marketing and digital marketing`,
                    `proficiency in social networking`, `proficiency in business planning`],
        requirements: ['understanding of High school economics', `basic understanding of social media`, `ability to eat`],
        tutors: [{
            name: 'Prof Adeyemi Taiwo',
            department: 'Electrical and Skating Engineering',
            info: ' is a skilled lecturer whose main research focus is on power and has been a lecturer for over 12years'
        },
        {
            name: 'Aberdeen High tower',
            department: 'Electrical and Skating Engineering',
            info: ' is a skilled lecturer whose main super power is telepathy'
        }],
        content:[{
            title: `Intoduction to skate boards`,
            objectives: ['understanding of High school economics', `basic understanding of social media`, `ability to eat`],

        },
        {
            title: `Navigating the sea`,
            objectives: ['understanding of High school economics', `basic understanding of social media`, `ability to eat`],

        },
        {
            title: `Avoiding Sharks`,
            objectives: ['understanding of High school economics', `basic understanding of social media`, `ability to eat`],

        },
        {
            title: `Being one with the Ocean`,
            objectives: ['understanding of High school economics', `basic understanding of social media`, `ability to eat`],

        },]
    },
    {
        id: 'jwgdn49593eeedf',
        title: 'Digital marketing',
        subtitle: 'Manage Your Social Strategies. Expand your online audience and establish your social brand',
        school: "Cobra kai",
        level: 'intermediate',
        type: 'proffessional',
        duration: '5 weeks',
        numberOfRatings: 150,
        numberOfStudents: 602,
        language: 'English',
        rating: '4.3',
        coverImg: '/assets/courseImg.svg',
        price: 100.00,
        about: `This specialization is updated every quarter to ensure you are receiving the most up-to-date training. The
                Social Media Marketing Specialization is designed to achieve two objectives. It gives you the social analytics
                tools, and training to help you become an influencer on social media. The course also gives you the
                knowledge and resources to build a complete social media marketing strategy – from consumer insights to
                final justification metrics.....more`,
        skills: [`proficiency in social media marketing`, `proficiency in influencer marketing and digital marketing`,
                    `proficiency in social networking`, `proficiency in business planning`],
        requirements: ['understanding of High school economics', `basic understanding of social media`, `ability to eat`],
        tutors: [{
            name: 'Prof Adeyemi Taiwo',
            department: 'Electrical and Skating Engineering',
            info: ' is a skilled lecturer whose main research focus is on power and has been a lecturer for over 12years'
        },
        {
            name: 'Aberdeen High tower',
            department: 'Electrical and Skating Engineering',
            info: ' is a skilled lecturer whose main super power is telepathy'
        }],
        content:[{
            title: `Intoduction to skate boards`,
            objectives: ['understanding of High school economics', `basic understanding of social media`, `ability to eat`],

        },
        {
            title: `Navigating the sea`,
            objectives: ['understanding of High school economics', `basic understanding of social media`, `ability to eat`],

        },
        {
            title: `Avoiding Sharks`,
            objectives: ['understanding of High school economics', `basic understanding of social media`, `ability to eat`],

        },
        {
            title: `Being one with the Ocean`,
            objectives: ['understanding of High school economics', `basic understanding of social media`, `ability to eat`],

        },]
    },
    {
        id: 'utu583e3ddhef',
        title: 'Dropshipping: full course',
        subtitle: 'Manage Your Social Strategies. Expand your online audience and establish your social brand',
        school: "Cobra kai",
        level: 'beginner',
        type: 'proffessional',
        duration: '5 weeks',
        numberOfRatings: 150,
        numberOfStudents: 602,
        language: 'English',
        rating: '4.0',
        coverImg: '/assets/courseImg.svg',
        price: 57.20
    },
    {
        id: 'ia39fbeucnef493',
        title: 'Professional Certificate In Social Media Marketing',
        subtitle: 'Manage Your Social Strategies. Expand your online audience and establish your social brand',
        school: "University of edinburgh University of edinburgh ",
        level: 'intermediate',
        type: 'Degree',
        duration: '5 weeks',
        numberOfRatings: 150,
        numberOfStudents: 602,
        language: 'English',
        rating: '4.7',
        coverImg: '/assets/courseImg.svg',
        price: 57.00
    },
    {
        id: 'j40she8fnhdhwd',
        title: 'Professional Certificate In Social Media Marketing',
        subtitle: 'Manage Your Social Strategies. Expand your online audience and establish your social brand',
        school: "University of edinburgh University of edinburgh ",
        level: 'beginner',
        type: 'proffessional',
        duration: '5 weeks',
        numberOfRatings: 150,
        numberOfStudents: 602,
        language: 'English',
        rating: '4.1',
        coverImg: '/assets/courseImg.svg'
    },

    
]