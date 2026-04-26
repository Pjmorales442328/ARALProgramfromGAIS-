import { useState } from 'react';

const LESSON_DATA = {
  week: 1,
  session: 1,
  topic: "Context Clues",
  phases: [
    {
      id: 'B',
      label: 'Bridge',
      duration: '5-7',
      steps: [
        {
          id: 1,
          title: 'Word Association',
          studentView: '<strong style="font-size: 1.2rem; color: #4ade80;">Activity 1: I Can Associate</strong>\n\nWrite as many words as you can that can be associated with the word <strong>"CLUES"</strong>.',
          teacherSay: 'Are you happy today? Can another learning adventure make you happier now? Let’s make that happen. Can I have a happy heart sign?\n\nToday, I want you to close your eyes and tell me what comes to your mind as you hear or read the word, "CLUES".',
          teacherDo: 'Display or write the word "CLUES" on the board.\nInstruct students to write as many words as they can associate with it.',
          expected: 'Hints, answers, guessing, detective, find out.',
          check: 'If students are unresponsive to the word "CLUES", give an example like: "When playing a guessing game, what do you look for?"',
          note: 'Reference: LAS Activity 1.'
        },
        {
          id: 2,
          title: 'Mood Rating',
          studentView: '<strong style="font-size: 1.2rem; color: #4ade80;">Activity 2: Association Activity</strong>\n\nWrite a 3-sentence description of your mood after completing Activity 1.\n\nRate on a Scale of 1-5:\nScale of 5: 😜\nScale of 4: 😋\nScale of 3: 😌',
          teacherSay: 'How did you feel while doing the association activity? Write a few sentences and rate your mood on a scale of 1 to 5.',
          teacherDo: 'Invite learners to write a description and rate their mood while accomplishing the "Association Activity" (Rate on a Scale of 1-5). Use LAS Activity 2.',
          expected: 'Scale 3, 4, or 5',
          check: 'Acknowledge any low scores and encourage them that today\'s lesson will be rewarding.',
          note: 'Reference: LAS Activity 2.'
        }
      ]
    },
    {
      id: 'R',
      label: 'Revisit',
      duration: '5-7',
      steps: [
        {
          id: 3,
          title: 'Jumbled Word Challenge',
          studentView: '<strong style="font-size: 1.2rem; color: #4ade80;">Activity 3: Jumbled Letters</strong>\n\nArrange the JUMBLED letters to form a word. Then, use it in a sentence.\n\n<span style="font-size: 1.5rem; letter-spacing: 0.5rem;">T C O E N X T</span>\n\nSentence: ____________________',
          teacherSay: 'As expressed in your Scale of Rates, can I have Stretched Smiley Icons?\n\nAt this point, I will ask you to arrange the given jumbled letters to form a word. Let’s find out how fast you can recall.',
          teacherDo: 'Flash the 7 jumbled letters on the board and wait for them to guess the word.\nWrite the exact meaning of CONTEXT on the board.\nAsk learners to construct a sentence using the word "context".',
          expected: 'CONTEXT',
          check: 'If students cannot unscramble it quickly, provide the first letter "C" and the last letter "T".',
          note: 'Reference: LAS Activity 3.'
        },
        {
          id: 4,
          title: 'Confidence Check',
          studentView: '<strong style="font-size: 1.2rem; color: #4ade80;">Activity 4: CONFIDENCE SCALE</strong>\n\nCheck your level of confidence as you revisit your prior knowledge.\n\n[ ] CONFIDENTLY GOOD (CG)\n[ ] CONFIDENTLY VERY GOOD (CVG)\n[ ] NOT SO CONFIDENT (NSC)\n[ ] NOT CONFIDENT (NC)',
          teacherSay: 'Before we dive deeper, please check your level of confidence using the Confidence Scale on your worksheet.',
          teacherDo: 'Have learners do the "Confidence Check" by picking CVG, CG, NSC, or NC.',
          expected: 'Learners confidently evaluate their prior knowledge.',
          check: 'Notice if many learners pick NC or NSC to pace your reading and explanations accordingly.',
          note: 'Reference: LAS Activity 4.'
        }
      ]
    },
    {
      id: 'I',
      label: 'Immerse',
      duration: '15-20',
      steps: [
        {
          id: 5,
          title: 'Sentence Reading',
          studentView: '1. The view was so <u style="color: #60a5fa;">majestic</u> from the beautiful corals and the rich marine life of the ocean, and the challenging climb of the mountains.\n\n2. The millions of pebbles <u style="color: #60a5fa;">filter</u> the dirt that makes the water very clear, thus making the water cool.\n\n3. It is far less <u style="color: #60a5fa;">expansive</u> compared with the <u style="color: #60a5fa;">famed</u> Banaue Rice Terraces of Ifugao province.',
          teacherSay: 'I have here sentences lifted from the short selection we will enjoy reading this week. Everybody, let\'s read the sentences. Take note specifically of the underlined words and the clues around them.',
          teacherDo: 'Display the 3 target sentences from the upcoming passage.\nAsk learners to read silently first, and take note of the underlined words and clues.\nCall on learners to read the sentences aloud, repeating each underlined word twice.',
          expected: 'Students reading smoothly and emphasizing the underlined words: majestic, filter, expansive, famed.',
          check: 'If students struggle with pronunciation, read the sentence first and have them echo read.',
          note: 'Reference: LAS Activity 5 sentences. (Note: Workbook says "expensive" but Context is "expansive". We will use the accurate context word for space).'
        }
      ]
    },
    {
      id: 'D',
      label: 'Discuss',
      duration: '10',
      steps: [
        {
          id: 6,
          title: 'Match the Hearts',
          studentView: '<strong style="font-size: 1.2rem; color: #4ade80;">Activity 5: Match the Hearts</strong><br/><br/>Read the sentences below. Focus on the underlined words and their context clues. Encircle the context clues, then match each heart to its meaning by writing the word inside the heart.<br/><br/><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;"><div style="border: 2px solid #22c55e; border-radius: 1rem; padding: 10px; text-align: center;"><span style="font-size: 1.5rem;">🤍</span><br/><span style="font-weight: bold; border-bottom: 1px solid white;">[ Write word ]</span><br/>To prevent something from passing through</div><div style="border: 2px solid #22c55e; border-radius: 1rem; padding: 10px; text-align: center;"><span style="font-size: 1.5rem;">🤍</span><br/><span style="font-weight: bold; border-bottom: 1px solid white;">[ Write word ]</span><br/>covering a wide area in terms of space</div><div style="border: 2px solid #22c55e; border-radius: 1rem; padding: 10px; text-align: center;"><span style="font-size: 1.5rem;">🤍</span><br/><span style="font-weight: bold; border-bottom: 1px solid white;">[ Write word ]</span><br/>known about by many people;</div><div style="border: 2px solid #22c55e; border-radius: 1rem; padding: 10px; text-align: center;"><span style="font-size: 1.5rem;">🤍</span><br/><span style="font-weight: bold; border-bottom: 1px solid white;">[ Write word ]</span><br/>showing impressive beauty or dignity:</div></div>',
          teacherSay: 'Let\'s be a Word Meaning Finder! From the sentences given, let\'s find out if the answers you\'ve given in the previous activity are correct. Can I have a finger heart sign?',
          teacherDo: 'Instruct learners to match the meanings to the underlined words (majestic, filter, expansive, famed) using a heart icon.\nHave learners encircle the context clues in the 3 sentences.\nInstruct pairs to do "Two Shoulders Connected": sit shoulder-to-shoulder, read the word and its meaning together.',
          expected: 'majestic -> impressive beauty\nfilter -> prevent passing through\nexpansive -> covering a wide area\nfamed -> known about by many people',
          check: 'If pairs disagree on the meaning, ask guiding questions about the context clues they encircled.',
          note: 'Reference: LAS Activity 5.'
        }
      ]
    },
    {
      id: 'G',
      label: 'Grow',
      duration: '10',
      steps: [
        {
          id: 7,
          title: 'IN CONTEXT Practice',
          studentView: '<strong style="font-size: 1.2rem; color: #4ade80;">Activity 6: IN CONTEXT</strong>\nChoose the accurate meaning of the underlined word:\n\n1. A traveler and an <u style="color: #60a5fa;">adventurer</u> will surely enjoy the breathtaking activities...\n2. One would <u style="color: #60a5fa;">literally</u> have a memorable stay...\n3. Most beaches are <u style="color: #60a5fa;">pebbly</u> and not sandy...\n4. The <u style="color: #60a5fa;">trail</u> going to the summit is a bit dangerous...\n\nCHOICES:\nA. actual sense\nB. one who seeks exciting experiences\nC. small stones worn smoothly by erosion\nD. a path through the countryside, mountains',
          teacherSay: 'Again, with your partners, let\'s figure out the meanings of these underlined words in sentences using their context clues. Read the sentences with your partner.',
          teacherDo: 'Have learners identify the meaning of the underlined words using context clues.\nLet learners read the sentences with the correct answers aloud.\nFlash all vocabulary words used for the day for a final choral reading.',
          expected: '1. adventurer -> B (one who seeks exciting experiences)\n2. literally -> A (actual sense)\n3. pebbly -> C (small stones worn smoothly by erosion)\n4. trail -> D (a path through the countryside, mountains)',
          check: 'If incorrect answers are chosen, help students identify the clue word in the sentence that led to the correct meaning.',
          note: 'Reference: LAS Activity 6.'
        }
      ]
    },
    {
      id: 'E',
      label: 'Evaluate',
      duration: '5-7',
      steps: [
        {
          id: 8,
          title: 'Self-Assessment Selfie',
          studentView: '<strong style="font-size: 1.2rem; color: #4ade80;">Activity 7: Self-Assessment Selfie</strong>\n\nWord Pool: breathtaking, panoramic, verdant, lush, rolling, rugged, pristine, crystal-clear, serene, tranquil\n\n1. Choose a word from the pool and use it in a sentence with context clues.\n2. Draw a snapshot of something you learned today.\n3. Add a caption.',
          teacherSay: 'Let’s think about what we have accomplished today. Write down one word and what clue helped you. Were the clues effective? Why do you say so?',
          teacherDo: 'Direct students to Activity 7: Self-Assessment Selfie.\nInstruct them to choose a word from the pool, use it in a sentence with context clues, and draw a snapshot with a caption.\nConduct a peer rating: "I learned word/s today."\nHave students complete the Smiley scale reflection.',
          expected: 'Students producing a drawing and a caption containing a vocabulary word and its context clue.',
          check: 'If students cannot draw, allow them to write a descriptive sentence describing their mental snapshot instead.',
          note: 'Reference: LAS Activity 7.'
        }
      ]
    }
  ]
};

export default function App() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activePhase = LESSON_DATA.phases[activePhaseIndex];
  const activeStep = activePhase.steps[activeStepIndex];

  const handleNextStep = () => {
    if (activeStepIndex < activePhase.steps.length - 1) {
      setActiveStepIndex(activeStepIndex + 1);
    } else if (activePhaseIndex < LESSON_DATA.phases.length - 1) {
      setActivePhaseIndex(activePhaseIndex + 1);
      setActiveStepIndex(0);
    }
  };

  const handlePrevStep = () => {
    if (activeStepIndex > 0) {
      setActiveStepIndex(activeStepIndex - 1);
    } else if (activePhaseIndex > 0) {
      setActivePhaseIndex(activePhaseIndex - 1);
      setActiveStepIndex(LESSON_DATA.phases[activePhaseIndex - 1].steps.length - 1);
    }
  };

  return (
    <div className="bg-[#F4F4F5] min-h-screen text-black font-sans p-6 flex justify-center">
      <div className="w-full max-w-[1024px]">
        {/* Header Navigation */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] gap-4 md:gap-0">
          <div>
            <h1 className="text-xl font-black uppercase tracking-tight">ARAL Flow Builder</h1>
            <p className="text-xs font-bold text-gray-500">WEEK 0{LESSON_DATA.week} • SESSION 0{LESSON_DATA.session}: {LESSON_DATA.topic.toUpperCase()}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 md:border-l-2 border-black md:pl-4">
              <span className="text-[10px] font-black uppercase">Source:</span>
              <span className="text-[10px] font-bold bg-yellow-300 px-2 py-0.5 border border-black truncate">
                ARAL_TUTOR_GUIDE_V2.PDF
              </span>
            </div>
            <button className="bg-black text-white px-4 py-1 text-xs font-bold uppercase hover:bg-gray-800 transition-colors">
              Export Lesson
            </button>
          </div>
        </header>

        {/* Bento Grid Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 gap-4 md:h-[630px]">
          
          {/* Step Timeline (Rail) */}
          <div className="md:col-span-2 md:row-span-6 bg-white border-2 border-black p-4 flex flex-col gap-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-y-auto">
            <div className="text-[10px] font-black uppercase mb-2 text-gray-400 italic underline">Teaching Flow</div>
            
            {LESSON_DATA.phases.map((phase, pIdx) => {
              const isActivePhase = pIdx === activePhaseIndex;
              return (
                <div key={phase.id} className="flex flex-col gap-2">
                  <div 
                    onClick={() => { setActivePhaseIndex(pIdx); setActiveStepIndex(0); }}
                    className={`flex items-center gap-2 cursor-pointer transition-opacity ${isActivePhase ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 border-black flex items-center justify-center text-[10px] font-black ${isActivePhase ? 'bg-green-400' : 'bg-transparent'}`}>
                      {phase.id}
                    </div>
                    <span className="text-[10px] font-bold uppercase">{phase.label}</span>
                  </div>
                  
                  {isActivePhase && (
                    <div className="ml-3 border-l-2 border-black pl-3 flex flex-col gap-2 py-2">
                      {phase.steps.map((step, sIdx) => {
                        const isActiveStep = sIdx === activeStepIndex;
                        return (
                          <div 
                            key={step.id} 
                            onClick={() => setActiveStepIndex(sIdx)}
                            className={`text-[9px] font-bold cursor-pointer transition-colors ${isActiveStep ? 'text-green-700 bg-green-50 p-1 border border-green-200' : 'text-gray-400 hover:text-black'}`}
                          >
                            STEP {step.id}: {step.title}
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Main Teacher Instruction Console */}
          <div className="md:col-span-6 md:row-span-4 bg-white border-2 border-black p-6 pt-8 relative shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col overflow-y-auto mt-4 md:mt-0">
            <div className="absolute -top-3 left-4 bg-green-400 border-2 border-black px-3 py-1 text-xs font-black uppercase flex items-center gap-1">
              <span>STEP 0{activeStep.id} — {activePhase.label.toUpperCase()}</span>
            </div>
            
            <div className="space-y-6 flex-grow">
              <section>
                <div className="text-[11px] font-black uppercase text-red-500 mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500"></div> Teacher: Say
                </div>
                <p className="text-lg font-bold leading-tight border-l-4 border-black pl-4 py-1 italic whitespace-pre-wrap">
                  "{activeStep.teacherSay}"
                </p>
              </section>
              
              <section>
                <div className="text-[11px] font-black uppercase text-blue-500 mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500"></div> Teacher: Do
                </div>
                <ul className="list-disc ml-5 text-sm font-bold space-y-2 whitespace-pre-wrap">
                  {activeStep.teacherDo.split('\n').map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>

              {activeStep.note && (
                <div className="p-4 bg-gray-100 border-2 border-black mt-auto">
                   <div className="text-[10px] font-black uppercase mb-1">Note: Extra Materials</div>
                   <p className="text-[11px] font-medium text-gray-600 italic">
                     [!] {activeStep.note}
                   </p>
                </div>
              )}
            </div>
          </div>

          {/* Student View Preview */}
          <div className="md:col-span-4 md:row-span-3 bg-black border-2 border-black flex flex-col shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-h-[300px]">
            <div className="bg-white border-b-2 border-black px-3 py-1 text-[10px] font-black uppercase">
              Student View (Visuals)
            </div>
            <div className="flex-grow flex flex-col items-center justify-center p-8 text-center bg-zinc-900 overflow-y-auto relative">
              <div 
                className="text-white text-xs font-bold leading-relaxed text-left w-full h-full"
                dangerouslySetInnerHTML={{ __html: activeStep.studentView.replace(/\n/g, '<br />') }}
              />
            </div>
          </div>

          {/* Check & Fallback */}
          <div className="md:col-span-4 md:row-span-3 bg-yellow-50 border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col overflow-y-auto">
            <div className="text-[11px] font-black uppercase mb-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 border border-black"></div> The Check (Scaffolding)
            </div>
            <div className="space-y-4 flex-grow flex flex-col">
              <div className="flex-grow">
                <div className="text-[9px] font-black text-gray-500 uppercase mb-1">Expected Answers:</div>
                <p className="text-xs font-bold bg-white p-2 border border-dashed border-gray-400 leading-snug">
                  {activeStep.expected}
                </p>
              </div>
              <div className="p-3 bg-white border border-black mt-auto">
                <div className="text-[9px] font-black text-red-600 uppercase mb-1">If they struggle:</div>
                <p className="text-xs font-medium italic">
                  {activeStep.check}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Actions / Expected Answers */}
          <div className="md:col-span-6 md:row-span-2 bg-blue-600 border-2 border-black p-4 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div className="text-[10px] font-black uppercase tracking-wider">Real-time Feedback Stats</div>
              <div className="bg-white text-blue-600 px-2 py-0.5 text-[9px] font-black border border-black">LIVE SESSION</div>
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-8 items-end h-full">
              <div className="text-center bg-blue-700 p-2 border border-black w-24">
                <div className="text-2xl font-black">{activePhase.duration}</div>
                <div className="text-[9px] font-bold uppercase tracking-widest text-blue-200">Min Duration</div>
              </div>
              
              <div className="flex-grow flex gap-2 items-end justify-end mt-4 md:mt-0">
                <button 
                  onClick={handlePrevStep}
                  disabled={activePhaseIndex === 0 && activeStepIndex === 0}
                  className="w-full md:w-auto border-2 border-white bg-blue-800 px-4 py-3 text-xs font-black uppercase hover:bg-white hover:text-blue-600 transition-all shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:shadow-none translate-x-0 translate-y-0 hover:translate-x-[2px] hover:translate-y-[2px] disabled:opacity-50 disabled:shadow-none disabled:translate-x-[2px] disabled:translate-y-[2px] disabled:cursor-not-allowed"
                >
                  Back
                </button>
                <button 
                  onClick={handleNextStep}
                  disabled={activePhaseIndex === LESSON_DATA.phases.length - 1 && activeStepIndex === activePhase.steps.length - 1}
                  className="w-full md:w-auto border-2 border-white bg-blue-600 px-4 py-3 text-xs font-black uppercase hover:bg-white hover:text-blue-600 transition-all shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:shadow-none translate-x-0 translate-y-0 hover:translate-x-[2px] hover:translate-y-[2px] disabled:opacity-50 disabled:shadow-none disabled:translate-x-[2px] disabled:translate-y-[2px] disabled:cursor-not-allowed"
                >
                  {activePhaseIndex === LESSON_DATA.phases.length - 1 && activeStepIndex === activePhase.steps.length - 1 ? 'Finish Lesson' : 'Next Step ➔'}
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
