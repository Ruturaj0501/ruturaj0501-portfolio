import React, { useEffect, useState } from 'react';
import { Mail, Linkedin, Github, ExternalLink, ChevronDown, ArrowRight, Code, Database, Brain, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';
import heroBackground from '@/assets/hero-bg.jpg';

// Form validation schema
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("orMD8UBfZ-jGBX57j");
  }, []);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle form submission
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        "service_2pnynvj",
        "template_06tt57y",
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_name: "Ruturaj Daphal"
        }
      );
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly at ruturajdaphal05@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const skills = {
    "LLM Frameworks": ["Gemini", "OpenAI", "Langchain", "Hugging Face", "LLAMA"],
    "ML Frameworks": ["TensorFlow", "PyTorch", "NLP", "Scikit-learn"],
    "Data Analysis & Visualization": ["Pandas", "NumPy", "Matplotlib", "Seaborn", "OpenCV", "Folium"],
    "Programming Languages": ["Python", "C++", "Java", "Git", "Jupyter Notebook"]
  };

  const projects = [
    {
      title: "Multimodal AI Chatbot with RAG & Session Memory",
      description: "Architected a versatile AI chatbot using Streamlit and LangChain, integrating multiple LLMs (Gemini, Llama) for text, PDF, and image analysis. Engineered a Retrieval-Augmented Generation (RAG) pipeline with ChromaDB and HuggingFace embeddings for accurate document Q&A.",
      technologies: ["LLM", "Langchain", "Hugging Face", "Streamlit", "ChromaDB"],
      category: "AI/ML",
      icon: Brain,
      link: "https://enchanced-chatbot-kv8dftq8zwcanpywhgfrzd.streamlit.app/"
    },
    {
      title: "ATS Resume Analyzer",
      description: "Built an interactive app using Gemini 1.5 Flash to evaluate resumes against job descriptions. Provided ATS-style feedback, resume improvement suggestions, and LLM-driven match scoring.",
      technologies: ["Streamlit", "Gemini Flash", "Python", "PyPDF2"],
      category: "AI/ML",
      icon: Brain,
      link: "https://ats-agent-92yekseq3rgcsac7yrzymj.streamlit.app/"
    },
    {
      title: "Data Analyst Agent",
      description: "This project is a Data Analyst Assistant built with Streamlit and powered by the Gemini AI model. The application allows users to upload various file formats, including CSV, PDF, DOCX, and images, to extract and analyze data. Users can ask natural language questions about the uploaded content to receive detailed, AI-generated insights. For tabular data, the app also features an interactive section to generate and display visualizations like bar, line, and scatter plots.",
      technologies: ["Streamlit", "Gemini AI", "Python", "Data Analysis"],
      category: "Data Science",
      icon: Database,
      link: "https://data-analyst-agent-iaapiybp7rmjxzrvpylhk2.streamlit.app/"
    },
    {
      title: "Fine Tuning with LoRA",
      description: "Fine-tuned the Google Gemma-2B model on an English quotes dataset using 4-bit quantization (BitsAndBytes) and Low-Rank Adaptation (LoRA) to enhance performance on consumer hardware.",
      technologies: ["Gemma", "Transformers", "Hugging Face", "LoRA"],
      category: "Deep Learning",
      icon: Brain
    },
    {
      title: "British Airways Customer Model",
      description: "Developed a Random Forest model to predict customer booking completion, analyzing trends and feature importance using Matplotlib and Seaborn.",
      technologies: ["Pandas", "Matplotlib", "Sklearn", "Seaborn"],
      category: "Data Science",
      icon: Database,
      link: "https://github.com/Ruturaj0501/British_Airlines"
    },
    {
      title: "Movie Sentiment & Salary Predicting Model And More",
      description: "Developed a movie sentiment classifier with an LSTM model in TensorFlow, leveraging NLTK for text preprocessing to accurately predict sentiment.",
      technologies: ["LSTM", "TensorFlow", "NLTK"],
      category: "Machine Learning",
      icon: Code,
      link: "https://github.com/Ruturaj0501"
    }
  ];

  const stats = [
    { number: "10+", label: "AI Projects" },
    { number: "2", label: "Internships" },
    { number: "10+", label: "Technologies" },
    { number: "4", label: "Years Learning" }
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
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">RD</div>
          <div className="flex gap-8">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
            <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="about"
        className="relative min-h-screen flex items-center overflow-hidden pt-20"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-background/85" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="text-sm text-primary font-medium mb-4">→ Introduction</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Ruturaj <br />
              <span className="text-primary">Daphal.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              AI & Generative AI Engineer, based in Pune.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
              AI & GenAI Developer skilled in building intelligent applications using LangChain, 
              Gemini Pro, and OpenAI tools. Focused on creating scalable, real-world AI solutions 
              with expertise in deep learning frameworks and vector databases.
            </p>
            
            <div className="flex gap-4 mb-8">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="#projects" className="flex items-center gap-2">
                  My Projects <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:ruturajdaphal05@gmail.com">Contact Me</a>
              </Button>
            </div>

            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/Ruturaj0501" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/ruturaj-daphal-rd0501" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:ruturajdaphal05@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={stat.label} className="portfolio-card text-center p-6" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-muted/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm text-primary font-medium mb-4">→ My Expertise</div>
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized in cutting-edge AI technologies and machine learning frameworks
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={category} className={`portfolio-card animate-slide-up hover:scale-105`} style={{ animationDelay: `${index * 150}ms` }}>
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
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm text-primary font-medium mb-4">→ My Work</div>
            <h2 className="text-4xl font-bold mb-4">Selected Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of AI-powered applications and machine learning solutions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className={`portfolio-card group animate-fade-in`} style={{ animationDelay: `${index * 200}ms` }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground font-medium px-2 py-1 bg-muted rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-primary/80 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="skill-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.link ? (
                  <Button variant="ghost" className="group-hover:bg-primary/5 w-full justify-between" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full">
                      View Details
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                ) : (
                  <Button variant="ghost" className="group-hover:bg-primary/5 w-full justify-between">
                    View Details
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-muted/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm text-primary font-medium mb-4">→ Professional Journey</div>
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
            <p className="text-muted-foreground">
              Building AI solutions across different industries and platforms
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <Card key={exp.title} className={`portfolio-card animate-slide-up`} style={{ animationDelay: `${index * 200}ms` }}>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">{exp.title}</h3>
                    <p className="text-lg font-semibold text-foreground">{exp.company}</p>
                  </div>
                  <span className="text-muted-foreground font-medium text-sm bg-muted px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-3 text-sm leading-relaxed">
                      <span className="text-primary mt-1 text-lg">→</span>
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
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm text-primary font-medium mb-4">→ Let's Connect</div>
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on AI projects or discuss innovative solutions? Let's talk!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="portfolio-card">
                <h3 className="text-xl font-bold mb-6 text-primary">Send me a message</h3>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input 
                        {...form.register('name')}
                        placeholder="Your Name" 
                        className="bg-background/50"
                        disabled={isSubmitting}
                      />
                      {form.formState.errors.name && (
                        <p className="text-sm text-red-500 mt-1">{form.formState.errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <Input 
                        {...form.register('email')}
                        type="email" 
                        placeholder="Your Email" 
                        className="bg-background/50"
                        disabled={isSubmitting}
                      />
                      {form.formState.errors.email && (
                        <p className="text-sm text-red-500 mt-1">{form.formState.errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <Input 
                      {...form.register('subject')}
                      placeholder="Subject" 
                      className="bg-background/50"
                      disabled={isSubmitting}
                    />
                    {form.formState.errors.subject && (
                      <p className="text-sm text-red-500 mt-1">{form.formState.errors.subject.message}</p>
                    )}
                  </div>
                  <div>
                    <Textarea 
                      {...form.register('message')}
                      placeholder="Your Message" 
                      rows={6} 
                      className="bg-background/50"
                      disabled={isSubmitting}
                    />
                    {form.formState.errors.message && (
                      <p className="text-sm text-red-500 mt-1">{form.formState.errors.message.message}</p>
                    )}
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="portfolio-card">
                <h3 className="text-lg font-bold mb-4 text-primary">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/20">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-medium">ruturajdaphal05@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/20">
                    <span className="h-5 w-5 text-primary flex items-center justify-center">📍</span>
                    <div>
                      <div className="text-sm text-muted-foreground">Location</div>
                      <div className="font-medium">Pune, Maharashtra</div>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="portfolio-card">
                <h3 className="text-lg font-bold mb-4 text-primary">Follow Me</h3>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://github.com/Ruturaj0501" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://linkedin.com/in/ruturaj-daphal-rd0501" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="mailto:ruturajdaphal05@gmail.com">
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Ruturaj Daphal. Designed & Built with passion for AI.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;