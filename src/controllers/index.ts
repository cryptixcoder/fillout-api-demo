import { Request, Response } from 'express';
import FilloutClient from '../utils/filloutapi'
import { ResponseFilterType } from '../types'
import { applyFilters } from '../utils/filters'

export const fetchFilteredResponses = async (req: Request, res: Response) => {
    const { formId } = req.params;

    const offset = parseInt(req.query.offset as string, 10) || 0;
    const limit = parseInt(req.query.limit as string, 10) || 5;
    const filters = req.query.filters;


    try {
        const parsedFilters: ResponseFilterType = filters ? JSON.parse(filters as string): [];
    
        const { data } = await FilloutClient.get(`/forms/${formId}/submissions`);

        const filteredResponses = applyFilters(data.responses, parsedFilters);

        const paginatedResponses = filteredResponses.slice(offset, offset + limit);

        res.json({
            ...data,
            responses: paginatedResponses,
            totalResponses: filteredResponses.length,
            pageCount: Math.ceil(filteredResponses.length / limit)
        });
    }
    catch(error) {
       console.error(error);
       res.status(500).send("Internal server error");
    }
}