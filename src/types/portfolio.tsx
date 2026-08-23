export type Language = 'EN' | 'DE';
export type TechCategory = 'frontend' | 'backend' | 'ai' | 'devops';

export interface Project{
    id : string;
    title : {
        EN : string;
        DE : string;
    };
    description : {
        EN : string;
        DE : string;
    };
    tags : string[];
    metrics : string[];
    liveUrl? : string;
    githubUrl : string;
    featured : boolean;
}

export interface SkillCategory{
    category : {
        EN : string;
        DE : string;
    };
    skills : string;
    iconType : TechCategory;
}

export interface MetricStat {
    value : string;
    label :{
        EN : string;
        DE : string;
    };
}

export interface ContactFormData{
    fullName : string;
    email : string;
    scope : 'fullstack' | 'ai_rag' | 'frontend_ui';
    message : string;
}