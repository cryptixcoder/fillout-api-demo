import { Router } from 'express';

import {fetchFilteredResponses} from '../controllers';

const router = Router();

router.get('/', (req, res) => {
    return res.send("Homepage");
});

router.get('/:formId/filteredResponses', fetchFilteredResponses);

export default router;