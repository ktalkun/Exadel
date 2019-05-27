package by.tolkun.plenta.servlet;


import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class UploadServlet extends HttpServlet {

    /**
     * Name of directory to upload files.
     */
    private static final String NAME_UPLOAD_DIRECTORY = "upload";

    @Override
    protected void doPost(
            final HttpServletRequest request,
            final HttpServletResponse response
    ) throws IOException, ServletException {

        String uploadPath = getServletContext().getRealPath("")
                + File.separator + NAME_UPLOAD_DIRECTORY;
        File uploadDir = new File(uploadPath);
        if (!uploadDir.exists()) {
            uploadDir.mkdir();
        }
        for (Part part : request.getParts()) {
            if (part.getSubmittedFileName().equals("")) {
                return;
            }
            String fileName = request.getSession().getId()
                    + part.getSubmittedFileName();
            String filePath = uploadPath + File.separator + fileName;
            part.write(filePath);
            response
                    .getWriter()
                    .println("Unique name of file:" + fileName);
        }
    }
}
