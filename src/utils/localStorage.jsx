localStorage.clear()
const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      total: 3,
      active: 2,
      newTask: 1,
      failed: 0,
      completed: 1
    },
    tasks: [
      {
        title: "Create Homepage UI",
        description: "Design and build the homepage layout using React and Tailwind.",
        date: "2025-10-20",
        category: "Design",
        assignedTo: "employee1@example.com",
        active: true,
        newTask: true,
        failed: false
      },
      {
        title: "Fix Navbar Bugs",
        description: "Resolve responsive layout issues in the navbar.",
        date: "2025-10-22",
        category: "Development",
        assignedTo: "employee1@example.com",
        active: false,
        newTask: false,
        failed: false
      },
      {
        title: "Prepare UI Demo",
        description: "Create a UI presentation for the client meeting.",
        date: "2025-10-25",
        category: "Presentation",
        assignedTo: "employee1@example.com",
        active: true,
        newTask: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstName: "Isha",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      total: 3,
      active: 1,
      newTask: 1,
      failed: 0,
      completed: 2
    },
    tasks: [
      {
        title: "Build Login Page",
        description: "Develop login and register pages with form validation.",
        date: "2025-10-18",
        category: "Frontend",
        assignedTo: "employee2@example.com",
        active: false,
        newTask: false,
        failed: false
      },
      {
        title: "Integrate API",
        description: "Connect React app with backend API for authentication.",
        date: "2025-10-19",
        category: "Backend",
        assignedTo: "employee2@example.com",
        active: true,
        newTask: true,
        failed: false
      },
      {
        title: "Write Documentation",
        description: "Prepare a brief document explaining API endpoints.",
        date: "2025-10-24",
        category: "Documentation",
        assignedTo: "employee2@example.com",
        active: false,
        newTask: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      total: 3,
      active: 2,
      newTask: 1,
      failed: 1,
      completed: 0
    },
    tasks: [
      {
        title: "Test Dashboard Features",
        description: "Perform unit and integration tests for all dashboard components.",
        date: "2025-10-21",
        category: "Testing",
        assignedTo: "employee3@example.com",
        active: true,
        newTask: false,
        failed: false
      },
      {
        title: "Fix API Errors",
        description: "Debug and fix failed API calls in employee panel.",
        date: "2025-10-23",
        category: "Backend",
        assignedTo: "employee3@example.com",
        active: false,
        newTask: false,
        failed: true
      },
      {
        title: "Update Tailwind Config",
        description: "Add new color palette and spacing options.",
        date: "2025-10-26",
        category: "UI Config",
        assignedTo: "employee3@example.com",
        active: true,
        newTask: true,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      total: 3,
      active: 2,
      newTask: 1,
      failed: 0,
      completed: 1
    },
    tasks: [
      {
        title: "Optimize Images",
        description: "Reduce image sizes for faster loading times.",
        date: "2025-10-18",
        category: "Performance",
        assignedTo: "employee4@example.com",
        active: false,
        newTask: false,
        failed: false
      },
      {
        title: "Create Profile Page",
        description: "Develop profile view and edit options for users.",
        date: "2025-10-20",
        category: "Frontend",
        assignedTo: "employee4@example.com",
        active: true,
        newTask: true,
        failed: false
      },
      {
        title: "Check Lighthouse Score",
        description: "Run performance audits using Google Lighthouse.",
        date: "2025-10-25",
        category: "Testing",
        assignedTo: "employee4@example.com",
        active: true,
        newTask: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      total: 3,
      active: 1,
      newTask: 2,
      failed: 0,
      completed: 2
    },
    tasks: [
      {
        title: "Deploy Website",
        description: "Host the latest React build to production server.",
        date: "2025-10-17",
        category: "Deployment",
        assignedTo: "employee5@example.com",
        active: false,
        newTask: false,
        failed: false
      },
      {
        title: "Fix Footer Alignment",
        description: "Adjust footer elements to be properly centered.",
        date: "2025-10-19",
        category: "UI Fix",
        assignedTo: "employee5@example.com",
        active: false,
        newTask: true,
        failed: false
      },
      {
        title: "Research Next.js",
        description: "Read documentation and prepare a short note on Next.js basics.",
        date: "2025-10-28",
        category: "Learning",
        assignedTo: "employee5@example.com",
        active: true,
        newTask: true,
        failed: false
      }
    ]
  }
];


const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export  const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}


export const getLocalStorage = ()=>{
 const employees =  JSON.parse(localStorage.getItem('employees')) 
 const admin =  JSON.parse(localStorage.getItem('admin')) 

 return {employees, admin}
}