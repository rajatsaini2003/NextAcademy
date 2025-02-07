import React from 'react'
import HighlightText from './HighlightText'
import know_your_progess from '../../../assets/Images/Know_your_progress.png'
import compare_with_others from '../../../assets/Images/Compare_with_others.png'
import plan_your_lesson from '../../../assets/Images/Plan_your_lessons.png'
import CTAButton from './CTAButton'
const LearningLanguageSection = () => {
  return (
    <div className='mt-[130px] pb-[100px]'>
      <div className='flex flex-col gap-5 items-center'>
        <div className='text-4xl font-semibold text-center'>
          Your Swiss Knife For
          <HighlightText text={" Learning any Language"} />
        </div>
        <div className='text-center text-richblack-600 mx-auto font-medium w-[70%] text-base mt-3'>
        Using spin making learning multiple languages easy. with 
        20+ languages realistic voice-over, progress tracking, 
        custom schedule and more.
        </div>

        <div className='flex flex-row items-center justify-center mt-5'>
            <img 
            src={know_your_progess} 
            alt="know Your Progress" 
            className='object-contain -mr-32'/>
            <img 
            src={compare_with_others} 
            className='object-contain'
            alt="compare with others" />
            <img 
            src={plan_your_lesson} 
            className='object-contain -ml-36'
            alt="plan your lessons" />
        </div>
        <div className='w-fit'>
          <CTAButton active={true} linkto={'/signup'} >
              <div>
                Learn More
              </div>
          </CTAButton>
        </div>
      </div>
    </div>
  )
}

export default LearningLanguageSection