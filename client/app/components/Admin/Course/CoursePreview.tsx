import React from 'react'

type Props = {
    active: number;
    setActive: (active: number) => void;
    courseData: any;
    handleCourseCreate: any;
    isEdit?: boolean;
  };

const CoursePreview = (props: Props) => {
  return (
    <div>CoursePreview</div>
  )
}
export default CoursePreview