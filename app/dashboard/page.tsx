import AppBreadcrumb from '@/components/app-breadcrumb'
import AdminLayout from '@/components/layouts/AdminLayout'
import React from 'react'

export default function DashboardPage() {
  return (
    <AdminLayout>
      <AppBreadcrumb page='Dashboard'/>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="bg-muted/50 aspect-video rounded-xl" />
        <div className="bg-muted/50 aspect-video rounded-xl" />
        <div className="bg-muted/50 aspect-video rounded-xl" />
      </div>
      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
    </AdminLayout>
  )
}
