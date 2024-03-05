import { ResponseFilterType, QuestionType } from '../types'

export const applyFilters = (responses: any[], filters: ResponseFilterType) => {
    return responses.filter(response => {
        return filters.every(filter => {
            const question = response.questions.find((q: QuestionType) => q.id === filter.id);
            if (!question) return false;

            switch (filter.condition) {
                case 'equals': return question.value === filter.value;
                case 'does_not_equal': return question.value !== filter.value;
                case 'greater_than': 
                    if (question.type === 'DatePicker') {
                        return new Date(question.value) > new Date(filter.value);
                    } else if (question.type === 'NumberInput') {
                        // Ensure both values are treated as numbers
                        return Number(question.value) > Number(filter.value);
                    }
                    break;
                case 'less_than': 
                    if (question.type === 'DatePicker') {
                        return new Date(question.value) < new Date(filter.value);
                    } else if (question.type === 'NumberInput') {
                        // Ensure both values are treated as numbers
                        return Number(question.value) < Number(filter.value);
                    }
                    break;
                default: return true;
            }
        });
    });
}