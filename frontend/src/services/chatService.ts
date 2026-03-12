export interface ChatMessage {
  from: 'me' | 'bot';
  text: string;
}

const CONTACT_EMAIL = 'Info@bidyutrobotics.com';
const CONTACT_PHONE = '+91 9370782979';
const CONTACT_ADDRESS = '901 Clifton Corporate Park, Indore, Madhya Pradesh 452010';

function normalizeMessage(message: string): string {
  return message.toLowerCase().replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

function hasAnyKeyword(message: string, keywords: string[]): boolean {
  return keywords.some((keyword) => message.includes(keyword));
}

function getRuleBasedReply(message: string): string {
  const normalized = normalizeMessage(message);

  if (!normalized) {
    return 'Please type a question. Example: "What is Bidyut Innovation?" or "What are your contact details?"';
  }

  if (hasAnyKeyword(normalized, ['hi', 'hello', 'hey', 'good morning', 'good evening', 'namaste'])) {
    return "Hi! I'm Buddy. I can answer fixed questions about Bidyut Innovation, contact details, courses, robotics labs, and support.";
  } else if (
    hasAnyKeyword(normalized, [
      'what is bidyut',
      'who is bidyut',
      'about bidyut',
      'bidyut innovation',
      'company profile',
      'about company',
    ])
  ) {
    return 'Bidyut Innovation is a robotics and EdTech company that provides hands-on robotics education, AI/coding learning, STREAM/STEM lab setups, and advanced robotics solutions for schools, colleges, and industries.';
  } else if (
    hasAnyKeyword(normalized, [
      'contact',
      'phone',
      'call',
      'mobile',
      'email',
      'mail',
      'address',
      'location',
      'where are you',
    ])
  ) {
    return `Here are our contact details:
Phone: ${CONTACT_PHONE}
Email: ${CONTACT_EMAIL}
Address: ${CONTACT_ADDRESS}`;
  } else if (
    hasAnyKeyword(normalized, [
      'admission',
      'enroll',
      'join',
      'register',
      'buy',
      'pricing',
      'fee',
      'cost',
      'quotation',
      'quote',
    ])
  ) {
    return `For enrollment, pricing, or quotations, please contact us directly:
Phone: ${CONTACT_PHONE}
Email: ${CONTACT_EMAIL}`;
  } else if (
    hasAnyKeyword(normalized, [
      'what do you do',
      'what you do',
      'what does bidyut do',
      'what bidyut does',
      'work of bidyut',
      'bidyut do',
      'what do you provide',
      'what you provide',
      'what does bidyut provide',
      'provide',
      'offering',
      'service',
      'offer',
      'program',
      'course',
    ])
  ) {
    return 'We provide: 1) Robotics labs for schools/colleges, 2) Robotics and coding education programs, 3) Teacher training, and 4) Industrial robotics solutions.';
  } else if (
    hasAnyKeyword(normalized, [
      'who can join',
      'for whom',
      'for students',
      'for schools',
      'for colleges',
      'for industry',
      'target audience',
    ])
  ) {
    return 'Bidyut works with schools, colleges, students, educators, and industries. Our solutions are designed for both education and real-world industrial automation use cases.';
  } else if (
    hasAnyKeyword(normalized, [
      'robotics lab',
      'lab setup',
      'school lab',
      'college lab',
      'stream lab',
      'stem lab',
    ])
  ) {
    return 'Yes, Bidyut Innovation helps set up robotics labs for schools and colleges, including hardware, curriculum support, and training.';
  } else if (
    hasAnyKeyword(normalized, [
      'teacher training',
      'train teacher',
      'faculty training',
      'educator training',
      'teacher support',
    ])
  ) {
    return 'Yes. Bidyut provides teacher/faculty training so schools and colleges can run robotics and coding programs effectively.';
  } else if (
    hasAnyKeyword(normalized, [
      'industrial robot',
      'industry solution',
      'automation',
      'humanoid',
      'quadruped',
      'cobot',
      'unitree',
      'product',
      'robots available',
    ])
  ) {
    return 'Bidyut also offers advanced robotics solutions for industry and research, including humanoid robots, quadruped robots, and automation-focused robotic systems.';
  } else if (
    hasAnyKeyword(normalized, [
      'why choose bidyut',
      'why bidyut',
      'benefit',
      'advantage',
      'why should i choose',
    ])
  ) {
    return 'Organizations choose Bidyut for practical hands-on learning, curriculum-aligned robotics programs, teacher enablement, and end-to-end lab + solution support.';
  } else if (
    hasAnyKeyword(normalized, [
      'partnership',
      'collaborate',
      'franchise',
      'partner with',
      'business collaboration',
    ])
  ) {
    return `For partnerships and collaboration opportunities, please connect with us:
Phone: ${CONTACT_PHONE}
Email: ${CONTACT_EMAIL}`;
  } else if (hasAnyKeyword(normalized, ['business hour', 'working hour', 'office time', 'timing'])) {
    return 'Business hours are available on our Contact page. For quick help, call us at +91 9370782979.';
  } else if (hasAnyKeyword(normalized, ['support', 'customer care', 'complaint', 'issue', 'problem'])) {
    return `Support team contact:
Phone: ${CONTACT_PHONE}
Email: ${CONTACT_EMAIL}`;
  }

  return `I answer fixed FAQ questions only. You can ask:
1) What is Bidyut Innovation?
2) What are your contact details?
3) What services do you offer?
4) Do you provide robotics lab setup?
5) Do you provide teacher training?
6) Do you provide industrial robots?
7) How can I get pricing or enrollment details?`;
}

export const chatService = {
  async sendMessage(message: string, _conversation: ChatMessage[] = []): Promise<string> {
    return getRuleBasedReply(message);
  },
};
