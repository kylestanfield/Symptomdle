export interface Disease {
  name: string;
  symptoms: string[];
}

export const DISEASES: Disease[] = [
  {
    name: 'INFLUENZA',
    symptoms: [
      'Fever',
      'Cough',
      'Sore throat',
      'Runny or stuffy nose',
      'Muscle or body aches',
      'Headaches',
      'Fatigue (tiredness)',
    ],
  },
  {
    name: 'COMMON COLD',
    symptoms: [
      'Runny or stuffy nose',
      'Sore throat',
      'Cough',
      'Congestion',
      'Slight body aches or a mild headache',
      'Sneezing',
      'Low-grade fever',
    ],
  },
  {
    name: 'PNEUMONIA',
    symptoms: [
        'Cough, which may produce greenish, yellow or even bloody mucus',
        'Fever, sweating and shaking chills',
        'Shortness of breath',
        'Rapid, shallow breathing',
        'Sharp or stabbing chest pain that gets worse when you breathe deeply or cough',
        'Loss of appetite, low energy, and fatigue',
        'Nausea and vomiting, especially in small children',
        'Confusion, especially in older people'
    ]
  },
  {
    name: 'BRONCHITIS',
    symptoms: [
        'Cough',
        'Production of mucus (sputum), which can be clear, white, yellowish-gray or green in color — rarely, it may be streaked with blood',
        'Fatigue',
        'Shortness of breath',
        'Slight fever and chills',
        'Chest discomfort'
    ]
  },
  {
    name: 'ALLERGIES',
    symptoms: [
        'Sneezing',
        'Itching of the nose, eyes or roof of the mouth',
        'Runny, stuffy nose',
        'Watery, red or swollen eyes (conjunctivitis)'
    ]
  },
  {
    name: 'MIGRAINE',
    symptoms: [
      'Severe throbbing or pulsing headache',
      'Nausea and vomiting',
      'Sensitivity to light, sound, and sometimes smell and touch',
      'Visual disturbances (aura)',
      'Tingling or numbness in face or extremities'
    ]
  },
  {
    name: 'GASTROENTERITIS',
    symptoms: [
      'Diarrhea',
      'Vomiting',
      'Stomach cramps',
      'Low-grade fever',
      'Nausea',
      'Headache'
    ]
  },
  {
    name: 'DIABETES',
    symptoms: [
      'Frequent urination',
      'Increased thirst',
      'Unexplained weight loss',
      'Extreme hunger',
      'Fatigue',
      'Blurred vision'
    ]
  },
  {
    name: 'HYPERTENSION',
    symptoms: [
      'Often asymptomatic',
      'Headaches',
      'Shortness of breath',
      'Nosebleeds',
      'Dizziness',
      'Chest pain'
    ]
  },
  {
    name: 'ASTHMA',
    symptoms: [
      'Shortness of breath',
      'Chest tightness or pain',
      'Wheezing when exhaling',
      'Trouble sleeping caused by shortness of breath, coughing or wheezing',
      'Coughing or wheezing attacks that are worsened by a respiratory virus'
    ]
  },
  {
    name: 'ANEMIA',
    symptoms: [
      'Fatigue',
      'Weakness',
      'Pale skin',
      'Shortness of breath',
      'Dizziness',
      'Cold hands and feet'
    ]
  },
  {
    name: 'DEPRESSION',
    symptoms: [
      'Persistent sad, anxious, or "empty" mood',
      'Feelings of hopelessness or pessimism',
      'Irritability',
      'Loss of interest or pleasure in hobbies and activities',
      'Fatigue and decreased energy',
      'Difficulty concentrating, remembering, or making decisions'
    ]
  },
  {
    name: 'ANXIETY',
    symptoms: [
      'Feeling nervous, restless or tense',
      'Having a sense of impending danger, panic or doom',
      'Having an increased heart rate',
      'Breathing rapidly (hyperventilation)',
      'Sweating',
      'Trembling'
    ]
  },
  {
    name: 'INSOMNIA',
    symptoms: [
      'Difficulty falling asleep at night',
      'Waking up during the night',
      'Waking up too early',
      'Not feeling well-rested after a night\'s sleep',
      'Daytime tiredness or sleepiness',
      'Irritability, depression or anxiety'
    ]
  },
  {
    name: 'HYPOTHYROIDISM',
    symptoms: [
      'Fatigue',
      'Increased sensitivity to cold',
      'Constipation',
      'Dry skin',
      'Weight gain',
      'Puffy face'
    ]
  },
  {
    name: 'HYPERTHYROIDISM',
    symptoms: [
      'Unintentional weight loss',
      'Rapid heartbeat (tachycardia)',
      'Irregular heartbeat (arrhythmia)',
      'Pounding of your heart (palpitations)',
      'Increased appetite',
      'Nervousness, anxiety and irritability'
    ]
  },
  {
    name: 'ARTHRITIS',
    symptoms: [
      'Pain',
      'Stiffness',
      'Swelling',
      'Redness',
      'Decreased range of motion'
    ]
  },
  {
    name: 'OSTEOPOROSIS',
    symptoms: [
      'Back pain, caused by a fractured or collapsed vertebra',
      'Loss of height over time',
      'A stooped posture',
      'A bone that breaks much more easily than expected'
    ]
  },
  {
    name: 'ECZEMA',
    symptoms: [
      'Dry skin',
      'Itching, which may be severe, especially at night',
      'Red to brownish-gray patches, especially on the hands, feet, ankles, wrists, neck, upper chest, eyelids, inside the bend of the elbows and knees, and in infants, the face and scalp',
      'Small, raised bumps, which may leak fluid and crust over when scratched',
      'Thickened, cracked, scaly skin'
    ]
  },
  {
    name: 'PSORIASIS',
    symptoms: [
      'Red patches of skin covered with thick, silvery scales',
      'Small scaling spots (commonly seen in children)',
      'Dry, cracked skin that may bleed or itch',
      'Itching, burning or soreness',
      'Thickened, pitted or ridged nails',
      'Swollen and stiff joints'
    ]
  },
  {
    name: 'ACNE',
    symptoms: [
      'Whiteheads (closed plugged pores)',
      'Blackheads (open plugged pores)',
      'Small red, tender bumps (papules)',
      'Pimples (pustules), which are papules with pus at their tips',
      'Large, solid, painful lumps under the skin (nodules)',
      'Painful, pus-filled lumps under the skin (cystic lesions)'
    ]
  },
  {
    name: 'ROSACEA',
    symptoms: [
      'Facial redness',
      'Swollen, red bumps',
      'Eye problems',
      'Enlarged nose (rhinophyma)'
    ]
  },
  {
    name: 'CELIAC',
    symptoms: [
      'Diarrhea',
      'Fatigue',
      'Weight loss',
      'Bloating and gas',
      'Abdominal pain',
      'Nausea and vomiting',
      'Constipation'
    ]
  },
  {
    name: 'CROHNS',
    symptoms: [
      'Diarrhea',
      'Fever',
      'Fatigue',
      'Abdominal pain and cramping',
      'Blood in your stool',
      'Mouth sores',
      'Reduced appetite and weight loss'
    ]
  },
  {
    name: 'COLITIS',
    symptoms: [
      'Diarrhea, with or without blood',
      'Abdominal pain and cramping',
      'Rectal pain',
      'Rectal bleeding — passing small amount of blood with stool',
      'Urgency to defecate',
      'Inability to defecate despite urgency',
      'Weight loss',
      'Fatigue'
    ]
  },
  {
    name: 'CHICKENPOX',
    symptoms: [
      'Itchy rash with small, fluid-filled blisters',
      'Fever',
      'Headache',
      'Sore throat',
      'Stomachache',
      'Red bumps that turn into fluid-filled blisters and then crusted scabs'
    ]
  },
  {
    name: 'COVID-19',
    symptoms: [
      'Fever or chills',
      'Cough',
      'Shortness of breath or difficulty breathing',
      'Fatigue',
      'Muscle or body aches',
      'Headache',
      'New loss of taste or smell',
      'Sore throat',
      'Congestion or runny nose',
      'Nausea or vomiting',
      'Diarrhea'
    ]
  },
  {
    name: 'MALARIA',
    symptoms: [
      'High fever',
      'Chills',
      'Flu-like illness',
      'Headache',
      'Muscle aches',
      'Tiredness',
      'Nausea, vomiting, and diarrhea may also occur',
      'Jaundice, seizures, and coma in severe cases'
    ]
  },
  {
    name: 'ZIKA VIRUS',
    symptoms: [
      'Fever',
      'Rash',
      'Joint pain',
      'Conjunctivitis (red eyes)',
      'Muscle pain',
      'Headache',
      'Pain behind the eyes',
      'Vomiting'
    ]
  },
  {
    name: 'HEART ATTACK',
    symptoms: [
      'Chest pain (pressure, tightness, or squeezing)',
      'Pain in other areas of the body (arms, back, neck, jaw, or stomach)',
      'Shortness of breath',
      'Cold sweat',
      'Nausea',
      'Lightheadedness'
    ]
  },
  {
    name: 'STROKE',
    symptoms: [
      'Sudden numbness or weakness in the face, arm, or leg, especially on one side of the body',
      'Sudden confusion, trouble speaking, or difficulty understanding speech',
      'Sudden trouble seeing in one or both eyes',
      'Sudden trouble walking, dizziness, loss of balance, or lack of coordination',
      'Sudden severe headache with no known cause'
    ]
  },
  {
    name: 'IBS',
    symptoms: [
      'Cramping',
      'Abdominal pain',
      'Bloating',
      'Gas',
      'Diarrhea or constipation, or both'
    ]
  },
  {
    name: 'LYMPHOMA',
    symptoms: [
      'Painless swelling of lymph nodes in the neck, armpit, or groin',
      'Fatigue',
      'Fever',
      'Night sweats',
      'Unexplained weight loss',
      'Itchy skin'
    ]
  },
  {
    name: 'LUPUS',
    symptoms: [
      'Fatigue',
      'Fever',
      'Joint pain, stiffness and swelling',
      'Butterfly-shaped rash on the face that covers the cheeks and bridge of the nose or rashes elsewhere on the body',
      'Skin lesions that appear or worsen with sun exposure',
      'Fingers and toes that turn white or blue when exposed to cold or during stressful periods (Raynaud\'s phenomenon)',
      'Shortness of breath',
      'Chest pain',
      'Dry eyes',
      'Headaches, confusion and memory loss'
    ]
  },
  {
    name: 'FIBROMYALGIA',
    symptoms: [
      'Widespread pain',
      'Fatigue',
      'Cognitive difficulties (fibro fog)',
      'Headaches',
      'Irritable bowel syndrome',
      'Temporomandibular joint (TMJ) disorders'
    ]
  },
  {
    name: 'ENDOMETRIOSIS',
    symptoms: [
      'Painful periods (dysmenorrhea)',
      'Pain with intercourse',
      'Pain with bowel movements or urination',
      'Excessive bleeding',
      'Infertility',
      'Fatigue, diarrhea, constipation, bloating or nausea, especially during menstrual periods'
    ]
  },
  {
    name: 'PCOS',
    symptoms: [
      'Irregular periods',
      'Excess androgen',
      'Polycystic ovaries'
    ]
  },
  {
    name: 'GALLSTONES',
    symptoms: [
      'Sudden and rapidly intensifying pain in the upper right portion of your abdomen',
      'Sudden and rapidly intensifying pain in the center of your abdomen, just below your breastbone',
      'Back pain between your shoulder blades',
      'Pain in your right shoulder',
      'Nausea or vomiting'
    ]
  },
  {
    name: 'KIDNEY STONES',
    symptoms: [
      'Severe, sharp pain in the side and back, below the ribs',
      'Pain that radiates to the lower abdomen and groin',
      'Pain that comes in waves and fluctuates in intensity',
      'Pain or burning sensation while urinating',
      'Pink, red or brown urine',
      'Cloudy or foul-smelling urine',
      'A persistent need to urinate, urinating more often than usual or urinating in small amounts',
      'Nausea and vomiting',
      'Fever and chills if an infection is present'
    ]
  },
  {
    name: 'UTI',
    symptoms: [
      'A strong, persistent urge to urinate',
      'A burning sensation when urinating',
      'Passing frequent, small amounts of urine',
      'Urine that appears cloudy',
      'Urine that appears red, bright pink or cola-colored — a sign of blood in the urine',
      'Strong-smelling urine',
      'Pelvic pain, in women — especially in the center of the pelvis and around the area of the pubic bone'
    ]
  },
  {
    name: 'MENINGITIS',
    symptoms: [
      'Sudden high fever',
      'Stiff neck',
      'Severe headache that seems different from normal',
      'Headache with nausea or vomiting',
      'Confusion or difficulty concentrating',
      'Seizures',
      'Sleepiness or difficulty waking',
      'Sensitivity to light',
      'No appetite or thirst',
      'Skin rash (sometimes, such as in meningococcal meningitis)'
    ]
  },
  {
    name: 'ENCEPHALITIS',
    symptoms: [
      'Headache',
      'Fever',
      'Aches in muscles or joints',
      'Fatigue or weakness',
      'Confusion, agitation or hallucinations',
      'Seizures',
      'Loss of sensation or paralysis in certain areas of the face or body',
      'Muscle weakness',
      'Problems with speech or hearing',
      'Loss of consciousness'
    ]
  },
  {
    name: 'TETANUS',
    symptoms: [
      'Spasms and stiffness in your jaw muscles (trismus)',
      'Stiffness of your neck muscles',
      'Difficulty swallowing',
      'Stiffness of your abdominal muscles',
      'Painful body spasms lasting for several minutes, typically triggered by minor occurrences, such as a draft, loud noise, physical touch or light'
    ]
  },
  {
    name: 'RABIES',
    symptoms: [
      'Fever',
      'Headache',
      'Nausea',
      'Vomiting',
      'Agitation',
      'Anxiety',
      'Confusion',
      'Hyperactivity',
      'Difficulty swallowing',
      'Excessive salivation',
      'Fear of water (hydrophobia) because of the difficulty in swallowing',
      'Hallucinations',
      'Insomnia',
      'Partial paralysis'
    ]
  },
  {
    name: 'LYME',
    symptoms: [
      'Fever, chills, headache, fatigue, muscle and joint aches, and swollen lymph nodes may occur in the absence of rash',
      'Erythema migrans (EM) rash: Occurs in approximately 70 to 80 percent of infected persons and begins at the site of a tick bite after a delay of 3 to 30 days (average is about 7 days). It expands gradually over several days reaching up to 12 inches or more (30 cm) across. It may feel warm to the touch but is rarely itchy or painful. Sometimes clears as it enlarges, resulting in a target or “bull\'s-eye” appearance. May appear on any area of the body.',
      'Facial palsy (loss of muscle tone or droop on one or both sides of the face)',
      'Severe headaches and neck stiffness due to meningitis',
      'Pain and swelling in large joints, such as knees',
      'Shooting pains that may interfere with sleep',
      'Heart palpitations and dizziness due to changes in heartbeat'
    ]
  },
  {
    name: 'SHINGLES',
    symptoms: [
      'Pain, burning, numbness or tingling',
      'Sensitivity to touch',
      'A red rash that begins a few days after the pain',
      'Fluid-filled blisters that break open and crust over',
      'Itching',
      'Fever',
      'Headache',
      'Sensitivity to light',
      'Fatigue'
    ]
  },
  {
    name: 'SCABIES',
    symptoms: [
      'Itching, often severe and usually worse at night',
      'Thin, wavy tunnels made up of tiny blisters or bumps on your skin'
    ]
  },
  {
    name: 'RINGWORM',
    symptoms: [
      'A scaly, itchy, circular rash'
    ]
  },
  {
    name: 'ATHLETES FOOT',
    symptoms: [
      'A scaly, itchy rash that usually causes stinging, itching, and burning between the toes and on the soles of the feet'
    ]
  },
  {
    name: 'JOCK ITCH',
    symptoms: [
      'A red, itchy, often ring-shaped rash in your groin area'
    ]
  },
  {
    name: 'THRUSH',
    symptoms: [
      'Creamy white lesions on your tongue, inner cheeks, and sometimes on the roof of your mouth, gums and tonsils',
      'Slightly raised lesions with a cottage cheese-like appearance',
      'Redness, burning or soreness that may be severe enough to cause difficulty eating or swallowing',
      'Slight bleeding if the lesions are rubbed or scraped',
      'Cracking and redness at the corners of your mouth',
      'A cottony feeling in your mouth',
      'Loss of taste',
      'Redness, irritation and pain under dentures (denture stomatitis)'
    ]
  }
];
