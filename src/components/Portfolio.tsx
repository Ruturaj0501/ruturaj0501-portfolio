import React, { useEffect, useState } from 'react';
import { Mail, Linkedin, Github, ExternalLink, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import heroBackground from '@/assets/hero-bg.jpg';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    "LLM Frameworks": ["Gemini", "OpenAI", "Langchain", "Hugging Face", "LLAMA"],
    "ML Frameworks": ["TensorFlow", "PyTorch", "NLP", "Scikit-learn"],
    "Data Analysis & Visualization": ["Pandas", "NumPy", "Matplotlib", "Seaborn", "OpenCV", "Folium"],
    "Programming Languages": ["Python", "C++", "Java"],
    "Platforms": ["Jupyter Notebook", "Git"]
  };

  const projects = [
    {
      title: "Multimodal AI Chatbot with RAG & Session Memory",
      description: "Architected a versatile AI chatbot using Streamlit and LangChain, integrating multiple LLMs (Gemini, Llama) for text, PDF, and image analysis. Engineered a Retrieval-Augmented Generation (RAG) pipeline with ChromaDB and HuggingFace embeddings for accurate document Q&A.",
      technologies: ["LLM", "Langchain", "Hugging Face", "Streamlit", "ChromaDB"]
    },
    {
      title: "ATS Resume Analyzer",
      description: "Built an interactive app using Gemini 1.5 Flash to evaluate resumes against job descriptions. Provided ATS-style feedback, resume improvement suggestions, and LLM-driven match scoring.",
      technologies: ["Streamlit", "Gemini Flash", "Python", "PyPDF2"]
    },
    {
      title: "Movie Sentiment & Salary Predicting Model",
      description: "Developed a movie sentiment classifier with an LSTM model in TensorFlow, leveraging NLTK for text preprocessing to accurately predict sentiment.",
      technologies: ["LSTM", "TensorFlow", "NLTK"]
    },
    {
      title: "Fine Tuning with LoRA",
      description: "Fine-tuned the Google Gemma-2B model on an English quotes dataset using 4-bit quantization (BitsAndBytes) and Low-Rank Adaptation (LoRA) to enhance performance on consumer hardware.",
      technologies: ["Gemma", "Transformers", "Hugging Face", "LoRA"]
    },
    {
      title: "British Airways Customer Model",
      description: "Developed a Random Forest model to predict customer booking completion, analyzing trends and feature importance using Matplotlib and Seaborn.",
      technologies: ["Pandas", "Matplotlib", "Sklearn", "Seaborn"]
    }
  ];

  const experiences = [
    {
      title: "Artificial Intelligence Intern",
      company: "Acmegrade",
      period: "Jan 2024 - Mar 2024",
      achievements: [
        "Developed and optimized ML models, leveraging NLP techniques for improved accuracy.",
        "Conducted data preprocessing and feature engineering, boosting model efficiency by 15%."
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "Cognifyz Technologies",
      period: "Dec 2024 - Jan 2025",
      achievements: [
        "Built a restaurant recommendation system using collaborative & content-based filtering, improving recommendation accuracy by 20%.",
        "Designed data pipelines for real-time ingestion, reducing processing time by 30%."
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-background/80" />
        <div 
          className={`relative z-10 text-center max-w-4xl mx-auto px-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 glow-text">
            RUTURAJ DAPHAL
          </h1>
          <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-8">
            AI & Generative AI Engineer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            AI & GenAI Developer skilled in building intelligent applications using LangChain, 
            Gemini Pro, and OpenAI tools. Focused on creating scalable, real-world AI solutions 
            with expertise in deep learning frameworks and vector databases like ChromaDB and FAISS.
          </p>
          
          <div className="flex gap-6 justify-center mb-12">
            <Button variant="outline" size="lg" asChild className="hover:bg-primary/10">
              <a href="mailto:ruturajdaphal05@gmail.com" className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="hover:bg-primary/10">
              <a href="https://linkedin.com/in/ruturaj-daphal-rd0501" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
          
          <ChevronDown className="h-8 w-8 text-primary animate-bounce mx-auto" />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={category} className={`portfolio-card animate-slide-up`} style={{ animationDelay: `${index * 150}ms` }}>
                <h3 className="text-xl font-bold mb-4 text-primary">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center">Selected Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className={`portfolio-card animate-fade-in`} style={{ animationDelay: `${index * 200}ms` }}>
                <h3 className="text-xl font-bold mb-3 text-primary">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="skill-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={exp.title} className={`portfolio-card animate-slide-up`} style={{ animationDelay: `${index * 200}ms` }}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                    <p className="text-lg font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-muted-foreground font-medium">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center">Education</h2>
          <Card className="portfolio-card animate-fade-in">
            <h3 className="text-xl font-bold text-primary mb-2">B.E. Computer Engineering (Pursuing)</h3>
            <p className="text-lg font-semibold mb-2">Modern Education Society's Wadia College of Engineering, Pune (SPPU)</p>
            <p className="text-muted-foreground">2022 - 2026</p>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="portfolio-card animate-slide-up">
              <h3 className="text-xl font-bold mb-6 text-primary">Send me a message</h3>
              <form className="space-y-4">
                <Input placeholder="Your Name" className="bg-background/50" />
                <Input type="email" placeholder="Your Email" className="bg-background/50" />
                <Textarea placeholder="Your Message" rows={5} className="bg-background/50" />
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Send Message
                </Button>
              </form>
            </Card>
            
            <Card className="portfolio-card animate-slide-up" style={{ animationDelay: '200ms' }}>
              <h3 className="text-xl font-bold mb-6 text-primary">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>ruturajdaphal05@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <a href="https://linkedin.com/in/ruturaj-daphal-rd0501" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    linkedin.com/in/ruturaj-daphal-rd0501
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-5 w-5 text-primary flex items-center justify-center">📍</span>
                  <span>Pune, Maharashtra</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;