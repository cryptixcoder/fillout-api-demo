import { Request, Response } from 'express';
import FilloutClient from '../utils/filloutapi'
import { ResponseFilterType } from '../types'
import { applyFilters } from '../utils/filters'

export const fetchFilteredResponses = async (req: Request, res: Response) => {
    const { formId } = req.params;
    const { page, per_page, filters } = req.query; 
    
    try {
        const parsedFilters: ResponseFilterType = filters ? JSON.parse(filters as string): [];
    
        const { data } = await FilloutClient.get(`/forms/${formId}/submissions`);

        const filteredResponses = applyFilters(data.responses, parsedFilters);

        res.json({
            ...data,
            responses: filteredResponses,
            totalResponses: filteredResponses.length,
            pageCount: Math.ceil(filteredResponses.length / (per_page ? parseInt(per_page as string) : 10))
        });
    }
    catch(error) {
       console.error(error);
       res.status(500).send("Internal server error");
    }
}