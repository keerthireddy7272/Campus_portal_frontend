# BMSCE Campus Portal

A modern, responsive web application for BMSCE campus management with comprehensive student portal features.

## 🚀 Features

- **Authentication System** - Sign in/Sign up with modern UI
- **Dashboard Overview** - Personalized student dashboard
- **CIE Marks Management** - Detailed marks tracking with visual indicators
- **Attendance Tracking** - Subject-wise attendance monitoring
- **Courses Management** - Course information with credits
- **Fees Management** - Detailed fee structure and payment tracking
- **Online Payments** - Multiple payment options integration
- **Proctor Diary** - Student and proctor information management
- **Dark Mode Support** - Toggle between light and dark themes
- **Real-time Notifications** - Live notification system
- **Responsive Design** - Works on all devices

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes
- **Notifications**: Sonner

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

## 🚀 Getting Started

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/your-username/Campus_portal_frontend.git
cd Campus_portal_frontend
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
# or
yarn install
\`\`\`

### 3. Run the Development Server

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

### 4. Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

\`\`\`
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Dashboard pages
│   │   ├── attendance/    # Attendance page
│   │   ├── cie/          # CIE marks page
│   │   ├── courses/      # Courses page
│   │   ├── fees/         # Fees page
│   │   ├── payments/     # Online payments page
│   │   └── proctor/      # Proctor diary page
│   ├── sign-up/          # Sign up page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home/Sign in page
├── components/            # Reusable components
│   ├── auth/             # Authentication components
│   ├── dashboard/        # Dashboard components
│   ├── ui/               # shadcn/ui components
│   └── theme-provider.tsx
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── public/               # Static assets
\`\`\`

## 🎨 Key Features Explained

### Authentication
- Modern sign-in/sign-up forms with validation
- Responsive design with gradient backgrounds
- Form validation with proper error handling

### Dashboard
- Personalized welcome message
- Quick stats overview (Attendance, CIE Average, Fees, Courses)
- Recent activity tracking
- Important resources access
- Quick action cards

### CIE Marks
- Comprehensive marks table with color-coded performance
- Subject-wise breakdown (CIE-1, CIE-2, CIE-3, Lab marks)
- Performance indicators and status badges
- Dark mode compatible hover states

### Attendance
- Subject-wise attendance tracking
- Visual progress bars and percentage indicators
- Attendance alerts and recommendations
- Weekly attendance overview

### Courses
- Detailed course information with credits
- Course type categorization (PC, BS, AE, ES, NCMC)
- Faculty information
- Semester-wise course organization

### Fees
- Detailed fee structure breakdown
- Payment status tracking
- Management quota and tuition fee sections
- Payment history and balance information

### Online Payments
- Multiple payment options
- Transaction history
- Payment guidelines
- Secure payment processing interface

## 🌙 Dark Mode

The application supports both light and dark themes:
- Toggle button in the header
- System preference detection
- Smooth theme transitions
- Consistent styling across all components

## 📱 Responsive Design

- Mobile-first approach
- Responsive navigation with collapsible sidebar
- Adaptive layouts for tablets and desktops
- Touch-friendly interface elements

## 🔔 Real-time Features

- Live notification system
- Real-time updates simulation
- Toast notifications for user feedback
- Connection status indicators

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Deploy to Other Platforms

The project can be deployed to any platform that supports Next.js applications.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-username/Campus_portal_frontend/issues) page
2. Create a new issue if your problem isn't already reported
3. Provide detailed information about the issue

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**BMSCE Campus Portal** - Making campus management modern and efficient! 🎓
