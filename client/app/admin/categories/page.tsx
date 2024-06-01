'use client'
import DashboardHero from '@/app/components/Admin/DashboardHero'
import AdminProtected from '@/app/hooks/adminProtected'
import Heading from '@/app/utils/Heading'
import React from 'react'
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import EditCategories from "../../components/Admin/Customization/EditCategories";

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <AdminProtected>
      <Heading
          title="Bright Forge"
          description="Bright Forge is a platform for students to learn coding and get expertise from industry level experts"
          keywords="DSA, MERN stack development, Generative AI, Machine Learning"
        />
        <div className="flex h-screen">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            <DashboardHero />
            <EditCategories />
          </div>
        </div>
      </AdminProtected>
    </div>
  )
}

export default page